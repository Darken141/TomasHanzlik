import React from 'react';
import { motion } from 'framer-motion';

import './production-card.styles.scss';

const ProductionCard = (props) => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
      
      const items = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }

      const hover = { display: 'block', opacity: 1, x: 0 }

    return (        
        <a 
            className='production-link' 
            rel="noopener noreferrer" 
            href={props.url} 
            target="_blank"
        >
            <motion.div 
                className="production-card"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{duration:1.5}}
                whileHover={{ 
                    scale: 1.1, 
                    boxShadow: '0px 0px 15px #fff'

                }}
                onHoverStart={e => console.log(e)}
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
                />
                <motion.div 
                    className="card-content"
                    initial="hidden"                    
                >
                    <motion.h1 
                        className='card-title'
                        variants={items}
                        transition={{duration: 2}}
                    >
                            {props.name}
                    </motion.h1>
                    <motion.p 
                        className='card-text'
                        initial={{ display: 'none', opacity: 0, x: 100}}
                        animate={hover}
                        transition={{delay: 2, duration: 3}}
                    >
                            {props.text}
                    </motion.p>
                </motion.div>
            </motion.div>
        </a>
    )
}
            
export default ProductionCard;
// <a rel="noopener noreferrer" href={props.url} target="_blank">Prejsť na web!</a>