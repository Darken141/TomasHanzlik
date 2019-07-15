import React from 'react';

import './production-card.styles.scss';

const ProductionCard = (props) => (
    
    <a className='production-link' rel="noopener noreferrer" href={props.url} target="_blank">
        <div className="production-card">
            <div className='production-image'
            style={{
                backgroundImage: `url(${props.imgUrl})`
            }}
            /> 
            <div className="card-content">
                <h1 className='card-title'>{props.name}</h1>
                <p className='card-text'>{props.text}</p>
            </div>
        </div>
    </a>
)
            
export default ProductionCard;
// <a rel="noopener noreferrer" href={props.url} target="_blank">Prejsť na web!</a>