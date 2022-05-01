/* eslint-disable arrow-body-style */
import React from 'react'
import { TotoItem } from '../TodoItem'

interface TodoItemInterface {
	title: string
}

interface TodoListInterface {
	todoItems: TodoItemInterface[]
}

export const TodoList = () => {
	return (
		<div className='flex flex-col gap-1 h-full mb-8'>
			<TotoItem title='Daily meeting with team' />
			<TotoItem title='Pay for rent' />
			<TotoItem title='Check emails' />
			<TotoItem title='Lunch with Emma' />
			<TotoItem title='Meditation' />
			<div className='flex items-center outline-none shadow-sm shrink-0 select-none w-full h-14 dark:text-slate-50 bg-light dark:bg-purpleDark rounded-xl transition-colors pl-3'>
				<div className='flex items-center justify-center'>
					<div className='relative animate-pulse inline-block mx-3 w-6 h-6 rounded-full bg-slate-200 dark:bg-purpleLight ' />
				</div>
				<div className='w-full mr-10 h-5 rounded animate-pulse bg-slate-200 dark:bg-purpleLight' />
			</div>
		</div>
	)
}
