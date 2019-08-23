import React from 'react';
import { connect } from 'react-redux';


import ProductionList from '../../components/production-list/production-list.component';

const HomePage = (props) => {

    const { backgroundImg } = props.production;
    return (
        <div className='homepage' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <ProductionList />
        </div>
    )
}


const mapStateToProps = ({production, user}) => ({
    production: production
})



export default connect(mapStateToProps)(HomePage);