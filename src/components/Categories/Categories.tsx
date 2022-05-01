/* eslint-disable arrow-body-style */
import React from 'react'
import { CategorySkeleton } from './components/CategorySkeleton'

interface CategoryInterface {
	title?: string
	tasks: string[]
	completedTasks: string[]
}

interface CategoriesInterface {
	categories: CategoryInterface[]
	loading?: boolean
}

export const Categories = ({
	categories,
	loading = false,
}: CategoriesInterface) => {
	if (loading) {
		return CategorySkeleton
	}

	return (
		<div className='mt-10'>
			<p className='text-black pl-9 tracking-wider dark:text-white text-sm uppercase'>
				Categories
			</p>
			<div className='w-full snap-x px-9 py-4 flex gap-3 first:pl-9 last:pr-9 overflow-auto'>
				{categories.map(category => {
					const { title, tasks, completedTasks } = category
					const numberOfTasks = tasks.length
					const numberOfCompletedTasks = completedTasks.length
					const allTasks = numberOfTasks + numberOfCompletedTasks
					const progress = (numberOfCompletedTasks / allTasks) * 100
					return (
						<div className='w-44 snap-center shrink-0 rounded-3xl bg-white dark:bg-purpleDark px-3 py-6 cursor-pointer shadow-md'>
							<p className='mb-1 text-sm text-slate-400'>
								{tasks.length} {tasks.length > 1 ? `tasks` : `task`}
							</p>
							<p className='mb-3 text-xl text-black dark:text-white truncate'>
								{title}
							</p>
							<div className='w-full h-1 bg-purpleLight rounded-lg'>
								<div
									style={{ width: `${progress}%` }}
									className='bg-purpleBright h-1 rounded-lg backdrop-brightness-150'
								/>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
