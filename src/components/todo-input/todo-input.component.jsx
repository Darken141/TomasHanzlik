import React from 'react';

import './todo-input.styles.scss';

import { FaPlus } from 'react-icons/fa'

const TodoInput = (props) => (
    <div className='todo-input'>
        <input 
            className='input-time' 
            type='text' 
            placeholder='5:45'
            value={props.addTime}
            // pattern for time 
            onChange={props.onTimeInputChange}
        />
        <input 
            className='input' 
            type='text' 
            placeholder='Vaša pripomienka'
            value={props.addTodo}
            onChange={props.onInputChange}
        />
        <button
            className='btn-submit'
            type='submit'
            onClick={props.handleCLick}
        >
            <FaPlus/>
        </button>
    </div>
)

export default TodoInput;