import React from 'react';

import { Link } from 'react-router-dom';

import './dashboard-menu.styles.scss';

const DashMenu = () => (
    <header className='header'>
        <Link className='page-name' to='/admin'>
            TomasHanzlik.com
        </Link>

        <div className='options'>
            <Link className='option' to='/admin'>Video</Link>
            <Link className='option' to='/'>Odhlásiť sa</Link>
        </div>
        </header>
)

export default DashMenu;