import React from 'react';

import Video from '../../components/video/video.component';
import TodoItem from '../../components/todo-item/todo-item.component';
import TodoInput from '../../components/todo-input/todo-input.component';

import './videopage.styles.scss'

class VideoEditor extends React.Component {
    constructor(){
      super();
      this.state = {
        serverData: 'http://localhost:3000/',
        id: '',
        videoUrl: '',
        videoDuration: '',
        videoProgress: '',
        isLogginIn: true,
        isPlaying: false,
        addTodo: '',
        addTime: '',
        todos: []
      }
    }
    

    componentDidMount() {
      this.getVideo(1);
      this.getTodos();
    }
      
    getVideo = (id) => {
      console.log('searching for the video');
      fetch(this.state.serverData + 'get-video', {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          id: id,
        })
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ videoUrl: data[0].video});
      })
    }

    getTodos = () => {
      fetch(this.state.serverData + 'get-todo')
      .then(response => response.json())
      .then(todos => {
        this.setState({todos: todos})
      });
    }
  
    onInputChange = event => {
      this.setState({addTodo: event.target.value})
    }

    onTimeInputChange = event => {
      this.setState({addTime: event.target.value})
    }

    handleCLickButton = () => {
      const { addTime, addTodo } = this.state;
      if (addTime !== '' && addTodo !== ''){
        fetch(this.state.serverData + 'add-todo', {
          method: 'post',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({
            time: addTime,
            text: addTodo
          })
        })
        .then(response => response.json())
        .then(() => {
          this.getTodos();
          this.setState({addTime: '', addTodo: ''})
        });
      } else {
        alert('Vložte pripomienku a čas')
      }
    }

    handleCLickDelButton = (id) => {
      fetch(this.state.serverData + 'delete-todo', {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          id: id
        })
      })
      .then(response => response.json())
      .then(() => {this.getTodos()});
    }

    render() {
      return (
        <div className='video-section'>
          <div className='container'>
            <Video video={this.state.videoUrl}/>
            <div className='todolist'>
              <TodoInput
                addTime={this.state.addTime}
                addTodo={this.state.addTodo}
                handleCLick={this.handleCLickButton}
                onInputChange={this.onInputChange}
                onTimeInputChange={this.onTimeInputChange}
              />
              <div className='list'>
                {this.state.todos.map(({id, ...otherTodoProps}) => (
                  <TodoItem key={id} {...otherTodoProps} handleCLickDelButton={() => this.handleCLickDelButton(id)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default VideoEditor;