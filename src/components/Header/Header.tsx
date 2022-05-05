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
		<div className='sticky top-0 bg-lightDimmed dark:bg-purpleLight z-30 flex gap-3 justify-between items-center px-6 py-2'>
			<button
				onClick={toggleMenu}
				type='button'
				className='p-3 text-normalPriority dark:text-menuItemDark mr-auto transition-colors lg:hidden'
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
