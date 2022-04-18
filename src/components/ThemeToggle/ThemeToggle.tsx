import React, { useEffect, useState } from 'react'
import { toggleThemeClass } from '../../utils'

type ThemeType = 'dark' | 'light'

export const ThemeToggle = () => {
	const [theme, setTheme] = useState<ThemeType>(
		localStorage.theme ? localStorage.theme : 'dark'
	)
	const isLight = theme === 'light'
	const toggleTheme = () => {
		if (theme === 'dark') {
			setTheme('light')
		} else {
			setTheme('dark')
		}
	}

	useEffect(() => {
		localStorage.theme = theme
		toggleThemeClass()
	}, [theme])

	return (
		<div className='flex gap-2 justify-center mt-10 items-center'>
			<span className='text-xs dark:text-slate-50'>Dark</span>
			<input
				className='relative cursor-pointer w-11 h-6 appearance-none border dark:bg-slate-600 border-slate-800 dark:border-slate-100 rounded-xl outline-none focus:outline-2 focus:outline-purpleBright after:content-[""] after:w-5 after:h-5 after:bg-slate-200 checked:bg-purpleDark after:absolute after:left-px after:translate-x-0 after:top-px after:rounded-xl checked:after:translate-x-full after:transition-transform after:ease-in-out transition-colors after:delay-75'
				onChange={toggleTheme}
				defaultChecked={isLight}
				type='checkbox'
			/>
			<span className='text-xs dark:text-slate-50'>Light</span>
		</div>
	)
}
