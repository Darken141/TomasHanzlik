import React from 'react';

import Video from '../../components/video/video.component';

import { Link } from 'react-router-dom';

const DashVideo = () => (
    <main className='main-video'>
        <div className='header-main'>
            <div className='header-main__heading'>
                <h2 className='header-main__heading-primary'>
                    Videa na kontrolu
                </h2>
            </div>
            <div className='header-main__add-btn'>
                Pridať video
            </div>
        </div>

        <div className='videocards'>
            <div className='videocards__card'>
                <Video video={'https://vimeo.com/308797532'} className='videocards__card-video'/>
                <Link to='/dashboard/video/:id'>
                    <h3 className='videocards__card-title'>Video Title</h3>
                </Link>
            </div>
            <div className='videocards__card'>
                <Video video={'https://vimeo.com/308797532'} className='videocards__card-video'/>
                <Link to='/dashboard/video/:id'>
                    <h3 className='videocards__card-title'>Video Title</h3>
                </Link>
            </div>
            <div className='videocards__card'>
                <Video video={'https://vimeo.com/308797532'} className='videocards__card-video'/>
                <Link to='/dashboard/video/:id'>
                    <h3 className='videocards__card-title'>Video Title</h3>
                </Link>
            </div>
        </div>
    </main>
)

export default DashVideo;