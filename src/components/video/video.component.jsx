import React from 'react'
import ReactPlayer from 'react-player'

import './video.styles.scss';

const Video = (props) => (
    <div className='video-component'>
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={props.video}
                width='100%'
                height='100%'
                controls={true}
                onDuration={props.handleVideoDuration}
                onProgress={props.handleVideoProgress}
                playing={props.isPlaying}
            />
        </div>
    </div>
)

export default Video;