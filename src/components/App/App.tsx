import React, { useState } from 'react'
import { toggleThemeClass } from '../../utils'
import { Background } from '../Background'
import { ThemeToggle } from '../ThemeToggle'
import { TotoItem } from '../TodoItem'

// Running this function on first render
// to remove transition between default
// dark theme to light theme if latest
// was selected by user
toggleThemeClass()

export const App = () => {
	const [open, setOpen] = useState(false)
	const toggleMenu = () => {
		setOpen(!open)
	}

	return (
		<>
			<div
				className={`fixed top-0 left-0 w-full h-full ${
					open ? 'animate-slideIn pointer-events-none' : 'animate-slideOut'
				} max-w-md mx-auto`}
			>
				<div className='text-3xl text-lightTextColor dark:text-slate-50 text-center mt-6 font-bold font-mono transition-colors'>
					#todo
				</div>
				<button
					onClick={toggleMenu}
					type='button'
					className='bg-white rounded-md ml-2 p-2 pointer-events-auto'
				>
					menu
				</button>
				<div className='mt-10 px-8 flex flex-col gap-1'>
					<TotoItem title='Daily meeting with team' />
					<TotoItem title='Pay for rent' />
					<TotoItem title='Check emails' />
					<TotoItem title='Lunch with Emma' />
					<TotoItem title='Meditation' />
				</div>
				<ThemeToggle />
				<Background
					colorLight='bg-lightDimmed'
					colorDark='dark:bg-purpleLight'
					rounded={open}
				/>
			</div>
			<Background colorLight='bg-purpleDark' colorDark='bg-purpleDark' />
		</>
	)
}
