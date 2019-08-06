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
                onDuration={props.getVideoDuration}
                onProgress={(e) => console.log(e)}
                playing={props.isPlaying}
            />
        </div>
    </div>
)

export default Video;