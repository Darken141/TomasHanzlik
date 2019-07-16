import React from 'react'

import './todo-item.styles.scss'

const TodoItem = (props) => (
    <tr className='todo-item'>
        <td className="todo-time">{props.time}</td>
        <td className="todo-text">{props.text}</td>
        <td className='todo-delete'>X</td>
    </tr>
)

export default TodoItem;