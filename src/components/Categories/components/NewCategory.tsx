/* eslint-disable arrow-body-style */
import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

export const NewCategory = () => {
	return (
		<div className='flex snap-center justify-center items-center w-44 shrink-0 rounded-3xl bg-white dark:bg-purpleDark cursor-pointer shadow-md'>
			<div className='text-slate-800 dark:text-white'>
				<AddRoundedIcon fontSize='large' />
			</div>
		</div>
	)
}
