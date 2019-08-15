import React from 'react';
import { connect } from 'react-redux';

import ProductionList from '../../components/production-list/production-list.component';
import CardContainer from '../../components/card-container/card-container.component';
import { auth } from '../../firebase/firebase.utils';

import './homepage.styles.scss'

const HomePage = (props) => {

    const { backgroundImg, hidden } = props.production;
    return (
        <div className='homepage' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
        {
            props.currentUser ? 
            (<button className='log-off-btn' onClick={() => auth.signOut()}>
                Odhlásiť sa
            </button>) :
            null
        }
        {
            hidden
            ? <ProductionList />
            : <CardContainer />
        }
        </div>
    )
}


const mapStateToProps = ({production, user}) => ({
    production: production,
    currentUser: user.currentUser
})



export default connect(mapStateToProps)(HomePage);