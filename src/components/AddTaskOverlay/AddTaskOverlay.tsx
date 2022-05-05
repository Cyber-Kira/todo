/* eslint-disable arrow-body-style */
import React, { useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { AddItemContext, TodoItemInterface } from '../App'
import { generateRandomId } from '../../utils'

export const AddTaskOverlay = () => {
	const AddTaskCtx = useContext(AddItemContext)
	const [value, setValue] = useState<TodoItemInterface>({
		id: '',
		title: '',
		isCompleted: false,
		category: '',
	})

	const setTodo = () => {
		if (value !== undefined) {
			if (value.category === '') {
				setValue(prevValue => {
					return {
						id: prevValue.id,
						title: prevValue.title,
						isCompleted: prevValue.isCompleted,
						category: 'all',
					}
				})
			}
			AddTaskCtx?.setTodoCollection(prevState => {
				window.localStorage.setItem(
					'todoCollection',
					JSON.stringify([value, ...prevState])
				)
				return [value, ...prevState]
			})
		}
		setValue({ id: '', title: '', isCompleted: false, category: '' })
		AddTaskCtx?.setOverlay(false)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue({
			id: generateRandomId(),
			title: e.target.value,
			isCompleted: false,
			category: '',
		})
	}

	const setCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(prevValue => {
			return {
				...prevValue,
				category: e.target.value,
			}
		})
	}

	return (
		<div
			className={`flex flex-col justify-between px-9 py-12 absolute top-0 left-0 z-50 w-screen h-[calc(100vh-50px)] pointer-events-none ${
				AddTaskCtx?.overlay
					? 'pointer-events-auto opacity-100'
					: '-z-50 opacity-0'
			} transition-all duration-500`}
		>
			<div className='flex justify-end w-full'>
				<button
					onClick={() => AddTaskCtx?.setOverlay(false)}
					className={`w-11 h-11 border-2 border-slate-300 text-slate-700 rounded-full ${
						AddTaskCtx?.overlay ? 'translate-y-0' : '-translate-y-4'
					} transition-transform duration-700`}
					type='button'
				>
					<CloseIcon />
				</button>
			</div>
			<div className='flex flex-col gap-4'>
				<input
					onChange={e => handleChange(e)}
					value={value.title}
					className={`bg-transparent h-12 indent-2 ${
						AddTaskCtx?.overlay ? 'translate-y-0' : '-translate-y-4'
					} transition-transform delay-150 duration-700 lg:w-96 self-end`}
					type='text'
					name='taskName'
					placeholder='Enter new task'
				/>
				<label
					className={`${
						AddTaskCtx?.overlay
							? 'translate-y-0 opacity-100'
							: '-translate-y-8 opacity-0'
					} transition-all delay-300 duration-700 lg:w-96 self-end`}
					htmlFor='categoryName'
				>
					Category:
					<input
						onChange={e => setCategory(e)}
						value={value.category}
						className={`bg-slate-50 border-x border-y ml-7 h-12 indent-2 ${
							AddTaskCtx?.overlay ? 'translate-y-0' : '-translate-y-4'
						} transition-transform delay-150 duration-700`}
						type='text'
						name='categoryName'
						placeholder='Enter a category'
					/>
				</label>
			</div>
			<button
				onClick={setTodo}
				className={`flex gap-1 justify-center items-center bg-menuItemLight w-1/2 h-12 self-end rounded-full text-white ${
					AddTaskCtx?.overlay
						? 'translate-y-0 opacity-100'
						: '-translate-y-8 opacity-0'
				} transition-all delay-300 duration-700 lg:w-48`}
				type='button'
			>
				New task
				<KeyboardArrowUpIcon />
			</button>
		</div>
	)
}
