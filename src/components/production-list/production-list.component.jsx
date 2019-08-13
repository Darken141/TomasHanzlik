import React from 'react';

import ProductionCard from '../production-card/production-card.component';


import './production-list.styles.scss';

const ProductionList = ( props ) => {
    return (
        <div className='production-list'>
            <div className='production-list-row'>
                <ProductionCard key={props.productions[0].id} name={props.productions[0].name} text={props.productions[0].text} imgUrl={props.productions[0].img} url={props.productions[0].url} />
                <ProductionCard key={props.productions[1].id} name={props.productions[1].name} text={props.productions[1].text} imgUrl={props.productions[1].img} url={props.productions[1].url} />
            </div>
            <div className='production-list-row'>
                <ProductionCard key={props.productions[2].id} name={props.productions[2].name} text={props.productions[2].text} imgUrl={props.productions[2].img} url={props.productions[2].url} />
                <ProductionCard key={props.productions[3].id} name={props.productions[3].name} text={props.productions[3].text} imgUrl={props.productions[3].img} url={props.productions[3].url} />
            </div>
        </div>
    )
}


export default ProductionList;

/*
<div className='production-list-row'>
                <ProductionCard key={props.productions[0].id} name={props.productions[0].name} text={props.productions[0].text} imgUrl={props.productions[0].img} url={props.productions[0].url} />
                <ProductionCard key={props.productions[1].id} name={props.productions[1].name} text={props.productions[1].text} imgUrl={props.productions[1].img} url={props.productions[1].url} />
            </div>
            <div className='production-list-row'>
                <ProductionCard key={props.productions[2].id} name={props.productions[2].name} text={props.productions[2].text} imgUrl={props.productions[2].img} url={props.productions[2].url} />
                <ProductionCard key={props.productions[3].id} name={props.productions[3].name} text={props.productions[3].text} imgUrl={props.productions[3].img} url={props.productions[3].url} />
            </div>
            */