import React, { useContext } from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { AddItemContext } from '../App'
import { AddTaskOverlay } from '../AddTaskOverlay'

export const AddTaskButton = () => {
	const AddTaskCtx = useContext(AddItemContext)
	const toggleOverlay = () => {
		AddTaskCtx!.setOverlay(!AddTaskCtx!.overlay)
	}

	const overlayBackground = (
		<div
			className={`fixed w-[2000px] h-[2000px] rounded-full bg-white ${
				AddTaskCtx!.overlay ? 'scale-100' : 'scale-0'
			} transition-all duration-200 z-50`}
		/>
	)

	return (
		<>
			<button
				type='button'
				onClick={toggleOverlay}
				className={`flex items-center justify-center fixed bottom-8 right-8 z-20 w-16 h-16 rounded-full shadow-lg bg-menuItemLight text-white ${
					AddTaskCtx!.overlay ? 'pointer-events-none' : ''
				}`}
			>
				<AddRoundedIcon fontSize='large' />
				{overlayBackground}
			</button>
			<AddTaskOverlay />
		</>
	)
}
