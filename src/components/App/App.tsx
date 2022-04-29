import AddRoundedIcon from '@mui/icons-material/AddRounded'
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
					<div className='mt-10'>
						<p className='text-black pl-9 tracking-wider dark:text-white text-sm uppercase'>
							Categories
						</p>
						<div className='w-full snap-x px-9 py-4 flex gap-3 first:pl-9 last:pr-9 overflow-auto'>
							<div className='flex snap-center justify-center items-center w-44 shrink-0 rounded-3xl bg-white dark:bg-purpleDark cursor-pointer shadow-md'>
								<div className='text-slate-800 dark:text-white'>
									<AddRoundedIcon fontSize='large' />
								</div>
							</div>
							<div className='flex snap-center flex-col gap-3 w-44 shrink-0 rounded-3xl bg-white dark:bg-purpleDark px-3 py-6 shadow-md'>
								<div className='text-sm mt-2 w-2/6 rounded bg-slate-200 dark:bg-purpleLight h-3 animate-pulse' />
								<div className='text-xl w-4/6 rounded bg-slate-200 dark:bg-purpleLight h-4 animate-pulse' />
								<div className='w-full mt-auto h-1 bg-slate-200 dark:bg-purpleLight animate-pulse' />
							</div>
							<div className='w-44 snap-center shrink-0 rounded-3xl bg-white dark:bg-purpleDark px-3 py-6 cursor-pointer shadow-md'>
								<p className='mb-1 text-sm text-slate-400'>40 tasks</p>
								<p className='mb-3 text-xl text-black dark:text-white truncate'>
									Business
								</p>
								<div className='w-full h-1 bg-purpleLight rounded-lg'>
									<div className='w-2/3 bg-purpleBright h-1 rounded-lg backdrop-brightness-150' />
								</div>
							</div>
						</div>
					</div>
					<div className='mt-6 px-9 flex flex-col gap-1'>
						<p className='text-black tracking-wider dark:text-white text-sm uppercase mb-2'>
							Inbox
						</p>
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
