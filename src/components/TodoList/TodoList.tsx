/* eslint-disable arrow-body-style */
import React, { useContext } from 'react'
import { AddItemContext } from '../App'
import { TotoItem } from '../TodoItem'

interface TodoItemInterface {
	id: string
	title: string
	isCompleted: boolean
	category: string
}

export const TodoList = ({
	filterString,
	todoItems,
}: {
	filterString: string
	todoItems: TodoItemInterface[]
}) => {
	const AddTaskCtx = useContext(AddItemContext)
	if (filterString === 'active') {
		return (
			<div className='flex flex-col gap-1 h-full mb-8'>
				{todoItems
					.filter(item => item.isCompleted === false)
					.map(todoItem => {
						return (
							<TotoItem
								key={todoItem.id}
								id={todoItem.id}
								title={todoItem.title}
								isCompleted={todoItem.isCompleted}
							/>
						)
					})}
			</div>
		)
	}
	if (filterString === 'completed') {
		return (
			<div className='flex flex-col gap-1 h-full mb-8'>
				<button
					onClick={() => {
						AddTaskCtx?.setTodoCollection(prevState => {
							const newTodoCollection = prevState.filter(
								todoItem => todoItem.isCompleted !== true
							)
							window.localStorage.setItem(
								'todoCollection',
								JSON.stringify(newTodoCollection)
							)
							return newTodoCollection
						})
					}}
					className='bg-red-600 dark:text-white p-2 rounded-lg'
					type='button'
				>
					Delete Everything
				</button>
				{todoItems
					.filter(item => item.isCompleted === true)
					.map(todoItem => {
						return (
							<TotoItem
								key={todoItem.id}
								id={todoItem.id}
								title={todoItem.title}
								isCompleted={todoItem.isCompleted}
							/>
						)
					})}
			</div>
		)
	}
	return (
		<div className='flex flex-col gap-1 h-full mb-8'>
			{todoItems.map(todoItem => {
				return (
					<TotoItem
						key={todoItem.id}
						id={todoItem.id}
						title={todoItem.title}
						isCompleted={todoItem.isCompleted}
					/>
				)
			})}
		</div>
	)
}
