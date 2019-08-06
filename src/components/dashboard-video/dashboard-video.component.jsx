import React from 'react';

import Video from '../video/video.component';

import './dashboard-video.styles.scss';

class DashVideo extends React.Component {
    constructor(){
        super();
        this.state ={
            videoId: '1',
            videoUrl: 'http://www.youtube.com/watch?v=i3QC9MaA220',
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

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    handleDeleteTodo = event => {
        console.log(this.state.todos.indexOf(event.target.value));
    }

    render(){
        return(
            <div className='video-settings'>
                <div className='settings'>
                    <input 
                        className='input' 
                        name='videoUrl' 
                        type='text' 
                        value={this.state.videoUrl} 
                        onChange={this.handleChange}
                    />
                    <button
                        className='btn-submit'
                        type='submit'
            
                    >
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className='container'>
                    <Video video={this.state.videoUrl} />
                </div>
            </div>
        )
    }
}

export default DashVideo;