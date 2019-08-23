import React from 'react';

import Video from '../video/video.component';

import {
    FaTrashAlt
} from 'react-icons/fa';

const DashVideoContainer = () => (
    <main className='main-video-container'>
        <div className='header-main'>
            <div className='header-main__heading'>
                <h2 className='header-main__heading-primary'>
                    Video Title
                </h2>
            </div>
        </div>

        <div className='container'>
            <div className='container__video'>
                <Video video={'https://vimeo.com/308797532'}/>
            </div>
            <div className='container__todos'>
                <div className='container__todos-todo'>
                    <div className='container__todos-todo-time'>
                        5:45
                    </div>
                    <div className='container__todos-todo-todo'>
                        Testing
                    </div>
                    <div className='container__todos-todo-delete'>
                        <FaTrashAlt/>
                    </div>
                </div>
                <div className='container__todos-todo'>
                    <div className='container__todos-todo-time'>
                        15:45
                    </div>
                    <div className='container__todos-todo-todo'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                    <div className='container__todos-todo-delete'>
                        <FaTrashAlt/>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
)


export default DashVideoContainer;