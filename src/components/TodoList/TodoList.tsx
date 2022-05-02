/* eslint-disable arrow-body-style */
import React from 'react'
import { TotoItem } from '../TodoItem'

interface TodoItemInterface {
	id: string
	title: string
}

interface TodoListInterface {
	todoItems: TodoItemInterface[]
}

export const TodoList = ({ todoItems }: TodoListInterface) => {
	return (
		<div className='flex flex-col gap-1 h-full mb-8'>
			{todoItems.map(todoItem => {
				return (
					<TotoItem key={todoItem.id} id={todoItem.id} title={todoItem.title} />
				)
			})}
		</div>
	)
}
