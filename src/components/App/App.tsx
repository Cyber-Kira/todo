import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import React, { useMemo, useState } from 'react'
import { toggleThemeClass } from '../../utils'
import { Background } from '../Background'
import { Header } from '../Header'
import { ThemeToggle } from '../ThemeToggle'
import { TotoItem } from '../TodoItem'
import image from '../../avatar.png'
import { AddTaskButton } from '../AddTaskButton'
import { Categories } from '../Categories'

// Running this function on first render
// to remove transition between default
// dark theme to light theme if latest
// was selected by user
toggleThemeClass()

interface AddItemInterface {
	overlay: boolean
	setOverlay: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddItemContext = React.createContext<AddItemInterface | null>(null)

export const App = () => {
	const [open, setOpen] = useState(false)
	const [firstLoad, setFirstLoad] = useState(true)
	const toggleMenu = () => {
		setOpen(!open)
		setFirstLoad(false)
	}
	const [overlay, setOverlay] = useState(false)
	const menuState = useMemo<AddItemInterface>(
		() => ({
			overlay,
			setOverlay,
		}),
		[overlay]
	)

	const categories = [
		{
			title: 'School',
			tasks: ['Go to school'],
			completedTasks: ['Do homework'],
		},
		{
			title: 'Work',
			tasks: ['Go to work', 'Clear the desk', 'Learn Postgresql'],
			completedTasks: ['Create a prototype', 'Refactor components'],
		},
	]

	return (
		<AddItemContext.Provider value={menuState}>
			<div
				className={`relative h-screen overflow-x-hidden ${
					open ? 'overflow-y-hidden' : 'overflow-y-auto'
				} ${overlay ? '-z-10' : ''}`}
			>
				<div
					className={`absolute z-20 inset-0 w-full h-auto ${
						open
							? 'animate-slideIn pointer-events-none h-[1000vh]'
							: 'animate-slideOut'
					} max-w-md mx-auto ${firstLoad ? 'animate-none' : ''}`}
				>
					<Header toggleMenu={toggleMenu} />
					<div className='text-black dark:text-white text-3xl px-9 pt-9 font-mono font-semibold leading-10 transition-colors'>
						What&apos;s up, Kirill!
					</div>
					<Categories categories={categories} />
					<div className='mt-6 px-9 flex flex-col gap-1'>
						<p className='text-black tracking-wider dark:text-white text-sm uppercase mb-2'>
							Inbox
						</p>
					</div>
					<Background
						colorLight='bg-lightDimmed'
						colorDark='dark:bg-purpleLight'
					/>
				</div>
			</div>
			<div
				className={`fixed -translate-x-[calc(100%+300px)] top-5 left-0 bottom-0 flex flex-col gap-5 w-3/5 ${
					open ? 'translate-x-[calc(0px)]' : 'duration-500'
				} transition ease-in-out duration-[650ms]`}
			>
				<button
					onClick={toggleMenu}
					className='absolute flex justify-center items-center right-0 w-12 h-12 rounded-full border-2 border-slate-500 border-opacity-25 text-light'
					type='button'
				>
					<ChevronLeftRoundedIcon fontSize='large' />
				</button>
				<div className='flex flex-col gap-12 ml-9'>
					<button
						className='relative w-24 h-24 mt-12 rounded-full'
						type='button'
					>
						<img
							className='rounded-full object-cover w-full h-full'
							src={image}
							alt='text'
						/>
					</button>
					<p className='text-white text-4xl font-mono'>Kirill Koloskov</p>
					<ul>
						<li className='flex items-center'>
							<div className='inline-block w-6 h-6 mb-1 text-slate-500 border-opa'>
								<BookmarkBorderOutlinedIcon />
							</div>
							{/* Will become router link when i finish with components */}
							<button
								type='button'
								onClick={toggleMenu}
								className='inline-block text-md font-mono text-lightDimmed ml-1 py-3 pl-4 pr-20'
							>
								Categories
							</button>
						</li>
						<li className='flex items-center'>
							<div className='inline-block w-6 h-6 mb-1 text-slate-500 border-opa'>
								<AppsOutlinedIcon />
							</div>
							{/* Will become router link when i finish with components */}
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
			<AddTaskButton />
			<Background colorLight='bg-purpleDark' colorDark='bg-purpleDark' />
		</AddItemContext.Provider>
	)
}
