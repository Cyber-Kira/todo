import React from 'react'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { ThemeToggle } from '../ThemeToggle'
import image from './user.png'

interface Props {
	open: boolean
	toggleMenu: () => void
}

export const SideMenu = ({ open, toggleMenu }: Props) => (
	<div
		className={`fixed -translate-x-[calc(100%+300px)] top-5 left-0 bottom-0 flex flex-col gap-5 w-3/5 ${
			open ? 'translate-x-[calc(0px)]' : 'duration-500'
		} transition ease-in-out duration-[650ms] lg:top-0 lg:left-0 lg:translate-x-0 lg:w-56 lg:bg-purpleDark lg:z-10`}
	>
		<button
			onClick={toggleMenu}
			className='absolute flex justify-center items-center right-0 w-12 h-12 rounded-full border-2 border-slate-500 border-opacity-25 text-light lg:hidden'
			type='button'
		>
			<ChevronLeftRoundedIcon fontSize='large' />
		</button>
		<div className='flex flex-col gap-12 ml-9'>
			<button className='relative w-24 h-24 mt-12 rounded-full' type='button'>
				<img
					className='rounded-full object-cover w-full h-full'
					src={image}
					alt='text'
				/>
			</button>
			<p className='text-white text-4xl font-mono'>Guest</p>
			<ul>
				<li className='flex items-center lg:pointer-events-none'>
					<div className='inline-block w-6 h-6 mb-1 text-slate-500 border-opa'>
						<BookmarkBorderOutlinedIcon />
					</div>
					<button
						type='button'
						onClick={toggleMenu}
						className='inline-block text-md font-mono text-lightDimmed ml-1 py-3 pl-4 pr-20'
					>
						Categories
					</button>
				</li>
				<li className='flex items-center lg:pointer-events-none'>
					<div className='inline-block w-6 h-6 mb-1 text-slate-500 border-opa'>
						<AppsOutlinedIcon />
					</div>
					<button
						type='button'
						onClick={toggleMenu}
						className='inline-block text-md font-mono text-lightDimmed ml-1 py-3 pl-4 pr-20'
					>
						Analytics
					</button>
				</li>
			</ul>
		</div>
		<div className='mt-auto mb-8'>
			<ThemeToggle />
		</div>
	</div>
)
