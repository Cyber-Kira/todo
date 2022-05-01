import React, { useMemo, useState } from 'react'
import { toggleThemeClass } from '../../utils'
import { Background } from '../Background'
import { Header } from '../Header'
import { AddTaskButton } from '../AddTaskButton'
import { Categories } from '../Categories'
import { TodoList } from '../TodoList'
import { SideMenu } from '../SideMenu'

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

	const todoItems = [
		{
			id: 1,
			title: 'Daily meeting with team',
		},
		{
			id: 2,
			title: 'Pay for rent',
		},
		{
			id: 3,
			title: 'Check emails',
		},
		{
			id: 4,
			title: 'Lunch with Emma',
		},
		{
			id: 5,
			title: 'Meditation',
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
						<TodoList todoItems={todoItems} />
					</div>
					<Background
						colorLight='bg-lightDimmed'
						colorDark='dark:bg-purpleLight'
					/>
				</div>
			</div>
			<SideMenu open={open} toggleMenu={toggleMenu} />
			<AddTaskButton />
			<Background colorLight='bg-purpleDark' colorDark='bg-purpleDark' />
		</AddItemContext.Provider>
	)
}
