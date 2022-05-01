/* eslint-disable arrow-body-style */
import React, { useState } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import { TodoToggle } from '../TodoToggle'

interface Props {
	title: string
}

export const TotoItem = ({ title }: Props) => {
	const [done, setDone] = useState(false)
	const [selected, setSelected] = useState(false)
	const [isDeleted, setDeleted] = useState(false)
	const [isHidden, setHidden] = useState(false)
	const timeoutRef = React.useRef<null | number>(null)
	const toggleDone = () => {
		setDone(!done)
	}
	const toggleSelected = () => {
		setSelected(!selected)
	}

	const handleDelete = () => {
		setDeleted(true)
		timeoutRef.current = window.setTimeout(() => {
			setHidden(true)
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
		<div
			className={`relative flex items-center outline-none shrink-0 select-none min-h-[3.5rem] h-auto rounded-xl transition-all ${
				isHidden ? 'hidden' : ''
			} `}
		>
			<div
				className={`flex items-center outline-none shadow-sm shrink-0 p-2 pr-3 select-none w-full min-h-[3.5rem] h-auto dark:text-slate-50 bg-light dark:bg-purpleDark rounded-xl transition-all pl-3 z-10 ${
					selected ? 'bg-slate-200 dark:bg-opacity-70' : ''
				} ${isDeleted ? '-translate-x-full opacity-0 duration-500' : ''}`}
			>
				<div className='flex items-center justify-center'>
					<TodoToggle toggleDone={toggleDone} toggleSelected={toggleSelected} />
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
