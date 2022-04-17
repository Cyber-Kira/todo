import React from 'react'
import { ThemeToggle } from '../ThemeToggle'

export const App = () => (
	<>
		<div className='text-3xl dark:text-slate-50 text-center mt-6 font-bold font-mono transition-colors'>
			#todo
		</div>
		<ThemeToggle />
	</>
)
