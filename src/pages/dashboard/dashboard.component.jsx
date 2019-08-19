import React from 'react';

import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';

import { 
    IoIosStats,
    IoIosVideocam } from 'react-icons/io';

import {
    FaRegChartBar,
    FaRegCaretSquareRight
} from 'react-icons/fa';

    
class Dashboard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userName: ''
        }
    }

    setUserName = () => {
        this.setState({ userName: this.props.currentUser.displayName})
    }

    componentDidMount() {
        setTimeout(this.setUserName, 1000)
    }

    render() {        
        console.log(this.state.userName)
        return (
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
                    <div className='sidenav__profile-name'>{this.state.userName}</div>
                </div>
                <ul className='sidenav__list'>
                    <li className='sidenav__list-item'>
                        <div className='sidenav__list-item-icon'>
                            <IoIosStats/>
                        </div>
                        <div className='sidenav__list-item-desc'>
                            Štatistiky
                        </div> 
                    </li>
                    <li className='sidenav__list-item'>
                        <div className='sidenav__list-item-icon'>
                            <IoIosVideocam/>
                        </div>
                        <div className='sidenav__list-item-desc'>
                            Video
                        </div>
                    </li>
                    <li className='sidenav__list-item'>
                        <span className='dots'>...</span>
                    </li>
                </ul>
            </aside>
            <main className='main'>
                <div className='header-main'>
                    <div className='header-main__heading'>
                        <h2 className='header-main__heading-primary'>
                            Vitaj, <span className='user'>{this.state.userName}</span>
                        </h2>
                        <h3 className='header-main__heading-secondary'>Ako sa dnes darí?</h3>
                    </div>
                    <div className='header-main__updates'>
                        Recent Items
                    </div>
                </div>

                <div className='main-overview'>
                    <div className='overviewcard'>
                        <div className='overviewcard__icon'>
                            <FaRegChartBar/>
                        </div>
                        <div className='overviewcard__info'>
                            Štatistiky
                        </div>
                    </div>
                    <div className='overviewcard'>
                        <div className='overviewcard__icon'>
                            <FaRegCaretSquareRight/>
                        </div>
                        <div className='overviewcard__info'>
                            Video
                        </div>
                    </div>
                </div>
            </main>
            <footer className='footer'>
                <div className='footer__copyright'>&copy; 2019 CoderKin</div>
                <div className='footer__signature'>Made by Richard</div>
            </footer>
        </div>
    )}
}

const mapStateToProps = ({ user: {currentUser} }) => ({
    currentUser
})

export default connect(mapStateToProps)(Dashboard);