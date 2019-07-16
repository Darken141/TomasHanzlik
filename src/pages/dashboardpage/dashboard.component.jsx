import React from 'react'

import SignIn from '../signin/signin.component';

import './dashboard.styles.scss';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogginIn: true
        }
    }

    render() {
        return (
            this.state.isLogginIn ? 
            <div className='dashboard'>
                Hello world
            </div>
            :
            <SignIn/>
        )
    }
} 

export default Dashboard;