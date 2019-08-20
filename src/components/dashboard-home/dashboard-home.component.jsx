import React from 'react';
import { Link } from 'react-router-dom';

import {
    FaRegChartBar,
    FaRegCaretSquareRight
} from 'react-icons/fa';

const DashHome = () => (
    <main className='main'>
        <div className='header-main'>
            <div className='header-main__heading'>
                <h2 className='header-main__heading-primary'>
                    Vitaj, <span className='user'>User</span>
                </h2>
                <h3 className='header-main__heading-secondary'>Ako sa dnes darí?</h3>
            </div>
            <div className='header-main__updates'>
                Recent Items
            </div>
        </div>

        <div className='main-overview'>
            <Link to='/dashboard/charts'>            
                <div className='overviewcard'>
                    <div className='overviewcard__icon'>
                        <FaRegChartBar/>
                    </div>
                    <div className='overviewcard__info'>
                        Štatistiky
                    </div>
                </div>
            </Link>
            <Link to='/dashboard/video'>  
                <div className='overviewcard'>
                    <div className='overviewcard__icon'>
                        <FaRegCaretSquareRight/>
                    </div>
                    <div className='overviewcard__info'>
                        Video
                    </div>
                </div>
            </Link>
        </div>
    </main>
)

export default DashHome;