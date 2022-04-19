import React, { useState } from 'react'
import { toggleThemeClass } from '../../utils'
import { Background } from '../Background'
import { Header } from '../Header'
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
				<Header toggleMenu={toggleMenu} />
				<div className='text-black dark:text-white text-3xl px-9 pt-9 font-mono font-semibold leading-10 transition-colors'>
					What&apos;s up, Kirill!
				</div>
				<div className='mt-10 px-9 flex flex-col gap-1'>
					<p className='text-black dark:text-white text-sm uppercase mb-2'>
						Inbox
					</p>
					<div className='relative h-28'>
						<div className='absolute top-0 left-0 flex gap-3'>
							<div className='w-44 text-black dark:text-white rounded-3xl bg-purpleDark px-3 py-6 shadow-2xl cursor-pointer'>
								<p className='mb-1 text-sm text-slate-400'>40 tasks</p>
								<p className='mb-3 text-xl'>Business</p>
								<div className='w-full h-1 bg-purpleLight rounded-lg'>
									<div className='w-1/2 bg-purpleBright h-1 rounded-lg backdrop-brightness-150' />
								</div>
							</div>
							<div className='w-44 text-black dark:text-white rounded-3xl bg-purpleDark px-3 py-6 shadow-2xl cursor-pointer'>
								<p className='mb-1 text-sm text-slate-400'>18 tasks</p>
								<p className='mb-3 text-xl'>Personal</p>
								<div className='w-full h-1 bg-purpleLight rounded-lg'>
									<div className='w-1/2 bg-purpleBright h-1 rounded-lg backdrop-brightness-150' />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-10 px-9 flex flex-col gap-1'>
					<p className='text-black dark:text-white text-sm uppercase mb-2'>
						Inbox
					</p>
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
