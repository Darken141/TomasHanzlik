import React from 'react';

import { auth } from '../../firebase/firebase.utils';
import { Link, Route, Switch } from 'react-router-dom';

import { 
    IoIosStats,
    IoIosVideocam } from 'react-icons/io';

import {
    FaHome
} from 'react-icons/fa';

import DashHome from '../../components/dashboard-home/dashboard-home.component';
import DashCharts from '../../components/dashboard-charts/dashboard-charts.component';
import DashVideo from '../../components/dashboard-video/dashboard-video.component';
    
const Dashboard = () => (
        <div className='dashboard-grid'>
            <header className='header'>
                <div className='header__search'></div>
                <Link
                    to='/'
                    className='header__logout'
                    onClick={() => auth.signOut()}
                >
                    Odhlásiť
                </Link>
            </header>
            <aside className='sidenav'>
                <div className='sidenav__profile'>
                    <div className='sidenav__profile-img'/>
                    <div className='sidenav__profile-name'>User</div>
                </div>
                <ul className='sidenav__list'>
                    <Link 
                        className='sidenav__list-item'
                        to='/dashboard'
                    >
                        <div className='sidenav__list-item-icon'>
                            <FaHome/>
                        </div>
                        <div className='sidenav__list-item-desc'>
                            Domov
                        </div>
                    </Link>
                    <Link 
                        className='sidenav__list-item'
                        to='/dashboard/charts'
                    >
                        <div className='sidenav__list-item-icon'>
                            <IoIosStats/>
                        </div>
                        <div className='sidenav__list-item-desc'>
                            Štatistiky
                        </div>
                    </Link>
                    <Link 
                        className='sidenav__list-item'
                        to='/dashboard/video'    
                    >
                        
                        <div className='sidenav__list-item-icon'>
                            <IoIosVideocam/>
                        </div>
                        <div className='sidenav__list-item-desc'>
                            Video
                        </div>
                    </Link>
                    <li className='sidenav__list-item'>
                        <span className='dots'>...</span>
                    </li>
                </ul>
            </aside>
            <Switch>
                <Route exact path='/dashboard' component={DashHome}/>
                <Route path='/dashboard/charts' component={DashCharts}/>
                <Route path='/dashboard/video' component={DashVideo}/>
            </Switch>
            <footer className='footer'>
                <div className='footer__copyright'>&copy; 2019 CoderKin</div>
                <div className='footer__signature'>Made by Richard</div>
            </footer>
        </div>
)

export default Dashboard;