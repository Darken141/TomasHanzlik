import React from 'react'
import { motion } from 'framer-motion';

import './todo-item.styles.scss'

import { FaTrashAlt } from 'react-icons/fa'


const TodoItem = (props) => (
    <motion.div 
        className='todo-item'
        animate={{ transition: { ease: 'easeOut', duration: 1}}}
    >
        <div className="todo-time">{props.time}</div>
        <div className="todo-text">{props.text}</div>
        <motion.div 
            className='todo-delete'
            initial={{opacity: 0}}
            whileHover={{opacity: 1, x: 0}}
            onClick={props.handleCLickDelButton}
        >
            <FaTrashAlt/>
        </motion.div>
    </motion.div>
)

export default TodoItem;