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

const categories = [
	{
		id: 1,
		title: 'School',
		tasks: ['Go to school'],
		completedTasks: ['Do homework'],
	},
	{
		id: 2,
		title: 'Work',
		tasks: ['Go to work', 'Clear the desk', 'Learn Postgresql'],
		completedTasks: ['Create a prototype', 'Refactor components'],
	},
]

export interface TodoItemInterface {
	id: string
	title: string
}

interface AddItemInterface {
	overlay: boolean
	setOverlay: React.Dispatch<React.SetStateAction<boolean>>
	todoCollection: TodoItemInterface[]
	setTodoCollection: React.Dispatch<React.SetStateAction<TodoItemInterface[]>>
}

export const AddItemContext = React.createContext<AddItemInterface | null>(null)

export const App = () => {
	const [open, setOpen] = useState(false)
	const [firstLoad, setFirstLoad] = useState(true)
	const [todoCollection, setTodoCollection] = useState<TodoItemInterface[]>([
		{
			id: '1235',
			title: 'Daily meeting with team',
		},
		{
			id: 'ga21',
			title: 'Pay for rent',
		},
		{
			id: '3135',
			title: 'Check emails',
		},
		{
			id: '13tg35',
			title: 'Lunch with Emma',
		},
		{
			id: 'g92h0h',
			title: 'Meditation',
		},
	])
	const toggleMenu = () => {
		setOpen(!open)
		setFirstLoad(false)
	}
	const [overlay, setOverlay] = useState(false)
	const menuState = useMemo<AddItemInterface>(
		() => ({
			overlay,
			setOverlay,
			todoCollection,
			setTodoCollection,
		}),
		[overlay, todoCollection]
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
					<Categories categories={categories} />
					<div className='mt-6 px-9 flex flex-col gap-1'>
						<p className='text-black tracking-wider dark:text-white text-sm uppercase mb-2'>
							Inbox
						</p>
						<TodoList todoItems={todoCollection} />
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
