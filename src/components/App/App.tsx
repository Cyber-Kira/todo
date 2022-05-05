import React, { useEffect, useMemo, useState } from 'react'
import { toggleThemeClass } from '../../utils'
import { Background } from '../Background'
import { Header } from '../Header'
import { AddTaskButton } from '../AddTaskButton'
import { Categories } from '../Categories'
import { TodoList } from '../TodoList'
import { SideMenu } from '../SideMenu'
import { TodoSelect } from '../TodoSelect'

// Running this function on first render
// to remove transition between default
// dark theme to light theme if latest
// was selected by user
toggleThemeClass()

const categories = [
	{
		id: '1',
		title: 'School',
		tasks: ['Go to school'],
		completedTasks: ['Do homework'],
	},
	{
		id: '2',
		title: 'Work',
		tasks: ['Go to work', 'Clear the desk', 'Learn Postgresql'],
		completedTasks: ['Create a prototype', 'Refactor components'],
	},
]

export interface TodoItemInterface {
	id: string
	title: string
	isCompleted: boolean
	category: string
}

interface AddItemInterface {
	overlay: boolean
	setOverlay: React.Dispatch<React.SetStateAction<boolean>>
	todoCollection: TodoItemInterface[]
	setTodoCollection: React.Dispatch<React.SetStateAction<TodoItemInterface[]>>
	categoryCollection: TodoItemInterface[]
	setCategoryCollection: React.Dispatch<
		React.SetStateAction<TodoItemInterface[]>
	>
}

export const AddItemContext = React.createContext<AddItemInterface | null>(null)

export const App = () => {
	const [open, setOpen] = useState(false)
	const [selectValue, setSelectValue] = useState('all')
	const [filterString, setFilterString] = useState<
		'all' | 'completed' | 'active'
	>('all')
	const [firstLoad, setFirstLoad] = useState(true)
	let LStodoCollection = window.localStorage.getItem('todoCollection')
	if (LStodoCollection === null) {
		LStodoCollection =
			'[{"id":"1235","title":"Daily meeting with team","isCompleted":false,"category":"all"},{"id":"ga21","title":"Pay for rent","isCompleted":false,"category":"all"},{"id":"3135","title":"Check emails","isCompleted":false,"category":"all"},{"id":"13tg35","title":"Lunch with Emma","isCompleted":false,"category":"all"},{"id":"g92h0h","title":"Meditation","isCompleted":false,"category":"all"}]'
	}
	const [todoCollection, setTodoCollection] = useState<TodoItemInterface[]>(
		JSON.parse(LStodoCollection)
	)

	let LScategoryCollection = window.localStorage.getItem('todoCollection')
	if (LScategoryCollection === null) {
		LScategoryCollection =
			'[{"id":"1235","title":"Daily meeting with team","isCompleted":false,"category":"all"},{"id":"ga21","title":"Pay for rent","isCompleted":false,"category":"all"},{"id":"3135","title":"Check emails","isCompleted":false,"category":"all"},{"id":"13tg35","title":"Lunch with Emma","isCompleted":false,"category":"all"},{"id":"g92h0h","title":"Meditation","isCompleted":false,"category":"all"}]'
	}
	const [categoryCollection, setCategoryCollection] = useState<
		TodoItemInterface[]
	>(JSON.parse(LScategoryCollection))

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
			categoryCollection,
			setCategoryCollection,
		}),
		[overlay, todoCollection]
	)
	const handleSelect = (e: React.SyntheticEvent<HTMLSelectElement, Event>) => {
		const target = e.target as HTMLSelectElement
		const { value } = target
		setSelectValue(value)
		if (value === 'all' || value === 'completed' || value === 'active')
			setFilterString(value)
	}

	useEffect(() => {
		window.localStorage.setItem('todoCollection', LStodoCollection!.toString())
	}, [])

	return (
		<AddItemContext.Provider value={menuState}>
			<div
				className={`relative h-screen overflow-x-hidden ${
					open ? 'overflow-y-hidden' : 'overflow-y-auto'
				} ${overlay ? '-z-10' : ''} lg:z-10`}
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
						What&apos;s up, Guest!
					</div>
					<Categories categories={categories} />
					<div className='mt-6 px-9 flex flex-col gap-1'>
						<TodoSelect value={selectValue} changeValue={handleSelect} />
						<TodoList filterString={filterString} todoItems={todoCollection} />
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
