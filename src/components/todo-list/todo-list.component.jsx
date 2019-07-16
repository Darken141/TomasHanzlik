import React from 'react'

import TodoItem from '../todo-item/todo-item.component';

import './todo-list.styles.scss'

const TodoList = (props) => (
    <div className='todo-list'>
        <input 
            className='todo-input' 
            type='text' 
            placeholder='Vlozte text stlacenm klavesy "Enter"'
            onKeyPress={(e) => console.log(e)}
        />  

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