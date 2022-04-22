import React, { useState } from 'react'
import { TodoToggle } from '../TodoToggle'

interface Props {
	title: string
}

export const TotoItem = ({ title }: Props) => {
	const [done, setDone] = useState(false)
	const [selected, setSelected] = useState(false)
	const toggleDone = () => {
		setDone(!done)
	}
	const toggleSelected = () => {
		setSelected(!selected)
	}

	return (
		<div
			className={`flex items-center outline-none shadow-sm shrink-0 p-2 select-none w-full min-h-[3.5rem] h-auto dark:text-slate-50 bg-light dark:bg-purpleDark rounded-xl transition-colors pl-3 ${
				selected ? 'bg-slate-200 dark:bg-opacity-70' : ''
			}`}
		>
			<div className='flex items-center justify-center'>
				<TodoToggle toggleDone={toggleDone} toggleSelected={toggleSelected} />
			</div>
			<div className='flex items-center overflow-hidden w-full'>
				<span
					className={`relative text-black mr-10 dark:text-slate-50 w-auto before:absolute before:h-px pl-1 before:w-[calc(100%+5px)] before:bg-black dark:before:bg-white  before:top-[calc(50%-1px)] before:-translate-x-[calc(100%+30px)] ${
						done
							? 'before:translate-x-[calc(-5px)] animate-wiggle before:animate-dimmed'
							: ''
					} before:transition-transform before:duration-300`}
				>
					{title}
				</span>
			</div>
		</div>
	)
}
