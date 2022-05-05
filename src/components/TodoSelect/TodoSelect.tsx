/* eslint-disable arrow-body-style */
import React from 'react'

interface Props {
	value: string
	changeValue: (e: React.SyntheticEvent<HTMLSelectElement, Event>) => void
	category?: string
}

export const TodoSelect = ({
	value,
	changeValue,
	category = 'Inbox',
}: Props) => {
	return (
		<div className='flex items-center mb-3'>
			<p className='text-black tracking-wider dark:text-white text-sm uppercase'>
				{category}
			</p>
			<div className='ml-auto'>
				<select
					onChange={e => changeValue(e)}
					value={value}
					className='bg-light dark:bg-purpleDark dark:text-slate-50 p-1 rounded-md'
				>
					<option value='all'>All</option>
					<option value='active'>Active</option>
					<option value='completed'>Completed</option>
				</select>
			</div>
		</div>
	)
}
