import React from 'react';
import { connect } from 'react-redux';
import { closeProductionContainer } from '../../redux/production/production.actions';
import { motion } from 'framer-motion';

import Video from '../video/video.component';

import './card-container.styles.scss';

const CardContainer = ( props ) => {
    const { closeProductionContainer, production } = props;  
    return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{duration: 1}}
        className='card-container' 
    >
        <span 
            className='close-btn'
            onClick={closeProductionContainer}
        >
            Zatvoriť
        </span>
        <h1 className='title'>{production.production.name}</h1>
        <div className='production'>
            <div className='desc'>
                <p>
                    {production.production.text}
                </p>
            </div>
            <motion.a 
                    className='btn' 
                    rel="noopener noreferrer" 
                    href={production.production.url} 
                    target="_blank"
            >
                Preisť na web
            </motion.a>
            <h3 className='title'>Ukážka</h3>
            <div className='sample'>
                <Video video={production.production.video} />
            </div>
        </div>
    </motion.div>
)}

const mapStateToProps = ({production}) => ({
    production: production
})

const mapDispatchToProps = dispatch => ({
    closeProductionContainer: () => dispatch(closeProductionContainer())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);