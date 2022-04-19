/* eslint-disable arrow-body-style */
import React from 'react'

interface Props {
	toggleMenu: () => void
}

export const Header = ({ toggleMenu }: Props) => {
	return (
		<div className='flex gap-5 justify-between items-center mt-6 px-9'>
			<button
				onClick={toggleMenu}
				type='button'
				className='bg-purpleLight dark:bg-white text-white dark:text-purpleDark text-xl rounded-md w-7 h-7 pointer-events-auto mr-auto transition-colors'
			>
				=
			</button>
			<div className='bg-purpleLight dark:bg-white rounded-md w-7 h-7 transition-colors' />
			<div className='bg-purpleLight dark:bg-white rounded-md w-7 h-7 transition-colors' />
		</div>
	)
}
