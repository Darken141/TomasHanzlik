import React from 'react';

import './todo-input.styles.scss';

const TodoInput = (props) => (
    <div className='todo-input'>
        <input 
            className='input' 
            type='text' 
            placeholder='Vaša pripomienka'
            onKeyPress={(e) => console.log(e)}
        />
        <button
            className='btn-submit'
            type='submit'

        >
            <i className="fas fa-plus"></i>
        </button>
    </div>
)

export default TodoInput;