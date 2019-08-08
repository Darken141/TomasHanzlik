import React from 'react';
import { motion } from 'framer-motion';

import './production-card.styles.scss';

const ProductionCard = (props) => {
    
    return (      
        <motion.div 
            className="production-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration:1.5}}
            whileHover={{ 
                scale: 1.1, 
                boxShadow: '0px 0px 15px #fff'
            }}
        >
            <div 
                className='production-image'
                style={{
                    backgroundImage: `url(${props.imgUrl})`
                }}
            /> 
            <motion.div 
                className='hover-background' 
                initial={{opacity:0}}
                animate={{ opacity: .5, backgroundColor: '#000'}}
                transition={{duration: 1.5}}
            />
                
            <motion.h1 
                className='card-title'
                initial={{ opacity: 0, y: -100}}
                animate={{ opacity: 1, y: 0}}
                transition={{duration: 1.5}}
            >
                {props.name}
            </motion.h1>
            <motion.div 
                className="card-content"
                initial={{ opacity: 0}} 
                whileHover={{ opacity: 1}} 
                transition={{ duration: 1.5}}    
            >
                <motion.a 
                    className='production-link' 
                    rel="noopener noreferrer" 
                    href={props.url} 
                    target="_blank"
                >
                <motion.p 
                    className='card-text'
                >
                    {props.text}
                </motion.p>
                </motion.a>
            </motion.div>
        </motion.div>
                
    )
}
            
export default ProductionCard;