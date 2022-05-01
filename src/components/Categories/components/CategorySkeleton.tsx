/* eslint-disable arrow-body-style */
import React from 'react'

export const CategorySkeleton = (
	<div className='flex snap-center flex-col gap-3 w-44 shrink-0 rounded-3xl bg-white dark:bg-purpleDark px-3 py-6 shadow-md'>
		<div className='text-sm mt-2 w-2/6 rounded bg-slate-200 dark:bg-purpleLight h-3 animate-pulse' />
		<div className='text-xl w-4/6 rounded bg-slate-200 dark:bg-purpleLight h-4 animate-pulse' />
		<div className='w-full mt-auto h-1 bg-slate-200 dark:bg-purpleLight animate-pulse' />
	</div>
)
