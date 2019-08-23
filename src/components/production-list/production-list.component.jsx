import React from 'react';
import { connect } from 'react-redux';
import { showProductionContainer } from '../../redux/production/production.actions';


import ProductionCard from '../production-card/production-card.component';

const ProductionList = ({productions}) => {
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

const mapStateToProps = ({ production: {productions} }) => ({
    productions
})


const mapDispatchToProps = dispatch => ({
    showProductionContainer: () => dispatch(showProductionContainer())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductionList);