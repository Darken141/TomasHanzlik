import React from 'react';

import { connect } from 'react-redux';

import {
    FaPlus,
    FaTrashAlt
} from 'react-icons/fa'

const TodoContainer = ({hidden}) => 
hidden ?
(
    <aside className='todo-list'>
      <div className='todo-list__input'>
        <input 
          className='todo-list__input-time' 
          type='text' 
          name='time' 
          placeholder='5:45'
        />
        <input 
          className='todo-list__input-todo' 
          type='text' 
          name='todo' 
          placeholder='Vaša pripomienka' 
        />
        <button 
          className='todo-list__input-submit'
          type='submit'
        >
          <FaPlus/>
        </button>
      </div>
      <div className='todo-list__todos'>
        <div className='todo-list__todos-todo'>
          <div className='todo-list__todos-todo-time'>
            5:45
          </div>
          <div className='todo-list__todos-todo-todo'>
            Testing
          </div>
          <div className='todo-list__todos-todo-delete'>
            <FaTrashAlt/>
          </div>
        </div>
        <div className='todo-list__todos-todo'>
          <div className='todo-list__todos-todo-time'>
            15:45
          </div>
          <div className='todo-list__todos-todo-todo'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation
          </div>
          <div className='todo-list__todos-todo-delete'>
            <FaTrashAlt/>
          </div>
        </div>
      </div>
    </aside>
) :
null

const mapStateToProps = ({ video: {hidden}}) => ({
    hidden
})

export default connect(mapStateToProps)(TodoContainer);