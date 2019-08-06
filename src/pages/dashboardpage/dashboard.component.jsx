import React from 'react'

import { Route, Switch } from 'react-router-dom'; 

import SignIn from '../signin/signin.component';
import DashMenu from '../../components/dashboard-menu/dashboard-menu.component';
import DashSettings from '../../components/dashboard-settings/dashboard-settings.component';
import DashVideo from '../../components/dashboard-video/dashboard-video.component';

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
                <DashMenu />
                <div className='dash-container'>
                    <Switch>
                        <Route exact path='/admin' component={DashVideo}/>
                        <Route path='/admin/settings' component={DashSettings}/>
                    </Switch>
                </div>
            </div>
                :
                <SignIn/>
        )
    }
} 

export default Dashboard;