import React from 'react';
import { connect } from 'react-redux';
import { toggleProductionContainer } from '../../redux/production/production.actions';
import { motion } from 'framer-motion';

import './card-container.styles.scss';

const CardContainer = ({toggleProductionContainer}) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{duration:1.5}}
        className='card-container' 
        onClick={toggleProductionContainer}
    >
        hello
    </motion.div>
)

const mapDispatchToProps = dispatch => ({
    toggleProductionContainer: () => dispatch(toggleProductionContainer())
})

export default connect(null, mapDispatchToProps)(CardContainer);