/* eslint-disable arrow-body-style */
import React from 'react'
import { TotoItem } from '../TodoItem'

interface TodoItemInterface {
	id: number
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
					<div key={todoItem.id}>
						<TotoItem title={todoItem.title} />
					</div>
				)
			})}
		</div>
	)
}
