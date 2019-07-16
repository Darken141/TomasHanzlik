import React from 'react';

import Particles from 'react-particles-js';

import Video from '../../components/video/video.component';
import TodoList from '../../components/todo-list/todo-list.component';

import './videopage.styles.scss'

const particlesOption = {
  particles: {
    number: {
      value: 5,
      density: {
        enable: true,
        value_area: 200
      }
    }
  }
}

class VideoEditor extends React.Component {
    constructor(){
      super();
      this.state = {
        videoId: '1',
        videoUrl: 'https://www.youtube.com/watch?v=i3QC9MaA220',
        isLogginIn: true,
        isPlaying: false,
        duration: '',
        playedSeconds: '',
        todos: [
          {
            id: 1,
            time: '5:23',
            text: 'Odstanit scenu vymenit za nieco ine'
          },
          {
            id: 2,
            time: '8:56',
            text: 'Hudba nesedi do videoklipu'
          },
          {
            id: 3,
            time: '15:18',
            text: 'Nieco dalsieho'
          }
        ]
      }
    }
  

    render() {
        return (
            <div className='video-editor'>
                <Particles className='particles' params={particlesOption}/>
                <div className='video-container'>
                    <Video video={this.state.videoUrl}/>
                    <TodoList todos={this.state.todos}/>
                </div>    
            </div>
        )
    }
}

export default VideoEditor;