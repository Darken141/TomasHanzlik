import React from 'react';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { toggleProductionContainer } from '../../redux/production/production.actions';

import './production-card.styles.scss';

class ProductionCard extends React.Component {
    constructor(props, {toggleProductionContainer}){
        super(props, {toggleProductionContainer})

        this.state = {
            showComponent: false
        }
    }


    render() {
        return (      
            <motion.div 
                onClick={this.props.toggleProductionContainer}
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
                        backgroundImage: `url(${this.props.imgUrl})`
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
                    {this.props.name}
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
                        {this.props.text}
                    </motion.p>
                </motion.div>
            </motion.div>
                    
        )
    }
}
            
const mapDispatchToProps = dispatch => ({
    toggleProductionContainer: () => dispatch(toggleProductionContainer())
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