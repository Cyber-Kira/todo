/* eslint-disable arrow-body-style */
import React, { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { AddItemContext } from '../App'

export const AddTaskOverlay = () => {
	const AddTaskCtx = useContext(AddItemContext)
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
			<input
				className={`bg-transparent h-12 indent-2 ${
					AddTaskCtx?.overlay ? 'translate-y-0' : '-translate-y-4'
				} transition-transform delay-150 duration-700`}
				type='text'
				name='taskName'
				placeholder='Enter new task'
			/>
			<button
				className={`flex gap-1 justify-center items-center bg-menuItemLight w-1/2 h-12 self-end rounded-full text-white ${
					AddTaskCtx?.overlay
						? 'translate-y-0 opacity-100'
						: '-translate-y-8 opacity-0'
				} transition-all delay-300 duration-700`}
				type='button'
			>
				New task
				<KeyboardArrowUpIcon />
			</button>
		</div>
	)
}
