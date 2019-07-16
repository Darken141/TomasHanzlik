import React from 'react'

import TodoInput from '../todo-input/todo-input.component';
import TodoItem from '../todo-item/todo-item.component';

import './todo-list.styles.scss'

const TodoList = (props) => (
    <div className='todo-list'>
        <TodoInput/>


        <table className="todo-table" cellSpacing="0">
            <tbody className='table-body'>
                {props.todos.map(todo => {
                    return <TodoItem key={todo.id} time={todo.time} text={todo.text} />                
                })}
            </tbody>
        </table>
    </div>
)

export default TodoList;