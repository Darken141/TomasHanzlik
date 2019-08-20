import React from 'react';

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
                <div className='videocards__card-video'/>
                <h3 className='videocards__card-title'>Video Title</h3>
            </div>
            <div className='videocards__card'>
                <div className='videocards__card-video'/>
                <h3 className='videocards__card-title'>Video Title</h3>
            </div>
            <div className='videocards__card'>
                <div className='videocards__card-video'/>
                <h3 className='videocards__card-title'>Video Title</h3>
            </div>
        </div>
    </main>
)

export default DashVideo;