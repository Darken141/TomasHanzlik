import React from 'react';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { openProductionContainer } from '../../redux/production/production.actions';

import './production-card.styles.scss';

const ProductionCard = (props) => {

        return (      
            <motion.div 
                onClick={() => props.openProductionContainer(props)}
                className="production-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 1}}
                whileHover={{ 
                    scale: 1.1, 
                    boxShadow: '0px 0px 15px #fff'
                }}
            >
                <div 
                    className='production-image'
                    style={{
                        backgroundImage: `url(${props.img})`
                    }}
                /> 
                <motion.div 
                    className='hover-background' 
                    initial={{opacity:0}}
                    animate={{ opacity: .5, backgroundColor: '#000'}}
                    transition={{duration: 1}}
                />
                    
                <motion.h1 
                    className='card-title'
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{delay: 0.5, duration: 1.5}}
                >
                    {props.name}
                </motion.h1>
                <motion.div 
                    className="card-content"
                    initial={{ opacity: 0}} 
                    whileHover={{ opacity: 1}} 
                    transition={{ duration: 1.5}}    
                >
                    <motion.p 
                        className='card-text'
                    >
                        {props.text}
                    </motion.p>
                </motion.div>
            </motion.div>
                    
        )
    }

            
const mapDispatchToProps = dispatch => ({
    openProductionContainer: (production) => dispatch(openProductionContainer(production))
})

export default connect(null, mapDispatchToProps)(ProductionCard);

/*
                <motion.a 
                    className='production-link' 
                    rel="noopener noreferrer" 
                    href={props.url} 
                    target="_blank"
                >
                */