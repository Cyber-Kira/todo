/* eslint-disable arrow-body-style */
import React from 'react'
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'

interface Props {
	toggleMenu: () => void
}

export const Header = ({ toggleMenu }: Props) => {
	return (
		<div className='flex gap-3 justify-between items-center mt-6 px-6'>
			<button
				onClick={toggleMenu}
				type='button'
				className='p-3 text-normalPriority dark:text-menuItemDark pointer-events-auto mr-auto transition-colors'
			>
				<DragHandleRoundedIcon />
			</button>
			<button
				type='button'
				className='p-3 text-normalPriority dark:text-menuItemDark transition-colors'
			>
				<SearchRoundedIcon />
			</button>
			<button
				type='button'
				className='p-3 text-normalPriority dark:text-menuItemDark transition-colors'
			>
				<NotificationsRoundedIcon />
			</button>
		</div>
	)
}
