import React from 'react';
import { connect } from 'react-redux';

import ProductionCard from '../production-card/production-card.component';


import './production-list.styles.scss';

const ProductionList = ( props ) => {
    const { productions } = props.production; 
    return (
        <div className='production-list'>
            <div className='production-list-row'>
                <ProductionCard key={productions[0].id} {...productions[0]} />
                <ProductionCard key={productions[1].id} {...productions[1]} />
            </div>
            <div className='production-list-row'>
                <ProductionCard key={productions[2].id} {...productions[2]} />
                <ProductionCard key={productions[3].id} {...productions[3]} />
            </div>
        </div>
    )
}

const mapStateToProps = ({ production }) => ({
    production: production
})

export default connect(mapStateToProps)(ProductionList);

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