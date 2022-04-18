import React from 'react'
import { toggleThemeClass } from '../../utils'
import { Background } from '../Background'
import { ThemeToggle } from '../ThemeToggle'
import { TotoItem } from '../TodoItem'

// Running this function on first render
// to remove transition between default
// dark theme to light theme if latest
// was selected by user
toggleThemeClass()

export const App = () => (
	<div className='max-w-md mx-auto'>
		<div className='text-3xl text-lightTextColor dark:text-slate-50 text-center mt-6 font-bold font-mono transition-colors'>
			#todo
		</div>
		<div className='mt-10 px-8 flex flex-col gap-1'>
			<TotoItem title='Daily meeting with team' />
			<TotoItem title='Pay for rent' />
			<TotoItem title='Check emails' />
			<TotoItem title='Lunch with Emma' />
			<TotoItem title='Meditation' />
		</div>
		<ThemeToggle />
		<Background />
	</div>
)
