/* eslint-disable arrow-body-style */
import React, { useContext, useState } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import { TodoToggle } from '../TodoToggle'
import { AddItemContext } from '../App'

interface Props {
	title: string
	id: string
	isCompleted: boolean
}

export const TotoItem = ({ title, id, isCompleted }: Props) => {
	const AddTaskCtx = useContext(AddItemContext)
	const [done, setDone] = useState(isCompleted)
	const [selected, setSelected] = useState(false)
	const [isDeleted, setDeleted] = useState(false)
	const timeoutRef = React.useRef<null | number>(null)
	const toggleDone = () => {
		setDone(!done)
		AddTaskCtx?.setTodoCollection(prevState => {
			const item = prevState.filter(todoItem => todoItem.id === id)[0]
			item.isCompleted = !done

			const itemIndex = prevState.findIndex(todoItem => todoItem.id === id)
			const itemsBefore = prevState.slice(0, itemIndex)
			const itemsAfter = prevState.slice(itemIndex + 1)
			const newTodoCollection = [...itemsBefore, item, ...itemsAfter]
			window.localStorage.setItem(
				'todoCollection',
				JSON.stringify(newTodoCollection)
			)
			return newTodoCollection
		})
	}
	const toggleSelected = () => {
		setSelected(!selected)
	}

	const handleDelete = () => {
		setDeleted(true)
		timeoutRef.current = window.setTimeout(() => {
			AddTaskCtx?.setTodoCollection(prevState => {
				const newTodoCollection = prevState.filter(
					todoItem => todoItem.id !== id
				)
				window.localStorage.setItem(
					'todoCollection',
					JSON.stringify(newTodoCollection)
				)
				return newTodoCollection
			})
		}, 3000)
	}

	const cancelDeletion = () => {
		setDeleted(false)
		window.clearTimeout(Number(timeoutRef.current))
	}

	const deletedText = (
		<div
			className={`absolute flex justify-between left-0 w-full px-5 items-center text-slate-400 dark:text-slate-300 gap-3 font-mono ${
				isDeleted ? 'opacity-100 duration-700 z-20' : 'opacity-0'
			} transition-opacity`}
		>
			<p>The task was deleted</p>
			<button
				onClick={cancelDeletion}
				className='flex items-center justify-center border-2 border-offset-2 px-3 py-1 rounded-full border-slate-300 dark:border-slate-400 uppercase'
				type='button'
			>
				Undo
			</button>
		</div>
	)

	return (
		<div className='relative flex items-center outline-none shrink-0 select-none min-h-[3.5rem] h-auto rounded-xl transition-all'>
			<div
				className={`flex items-center outline-none shadow-sm shrink-0 p-2 pr-3 select-none w-full min-h-[3.5rem] h-auto dark:text-slate-50 bg-light dark:bg-purpleDark rounded-xl transition-all pl-3 z-10 ${
					selected ? 'bg-slate-200 dark:bg-opacity-70' : ''
				} ${isDeleted ? '-translate-x-full opacity-0 duration-500' : ''}`}
			>
				<div className='flex items-center justify-center'>
					<TodoToggle
						toggleDone={toggleDone}
						done={isCompleted}
						toggleSelected={toggleSelected}
					/>
				</div>
				<div className='flex items-center justify-between overflow-hidden w-full'>
					<span
						className={`relative text-black dark:text-slate-50 w-auto before:absolute before:h-px pl-1 before:w-[calc(100%+5px)] before:bg-black dark:before:bg-white  before:top-[calc(50%-1px)] before:-translate-x-[calc(100%+30px)] ${
							done
								? 'before:translate-x-[calc(-5px)] animate-wiggle before:animate-dimmed'
								: ''
						} before:transition-transform before:duration-300`}
					>
						{title}
					</span>
					<button
						type='button'
						onClick={handleDelete}
						className='flex items-center justify-center bg-menuItemLight text-lightDimmed dark:bg-purpleLight dark:text-lightToggleRing w-7 h-7 rounded'
					>
						<DeleteRoundedIcon fontSize='small' />
					</button>
				</div>
			</div>
			{deletedText}
		</div>
	)
}
