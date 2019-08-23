import React from 'react';

import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showMenu } from '../../redux/video/video-editor.actions';

import TodoContainer from '../../components/todo-container/todo-container.component';

import Video from '../../components/video/video.component';
import { 
  FaBars
} from 'react-icons/fa';

const data = {
  serverData: 'http://localhost:3000/',
  id: '',
  videoUrl: 'https://vimeo.com/308797532',
  videoDuration: '',
  videoProgress: '',
  isLogginIn: true,
  isPlaying: false,
  addTodo: '',
  addTime: '',
  todos: []
}

const VideoEditor = ({showMenu}) => (
  <div className='videopage-grid'>

    <header className='header'>
      <div className='header__user'>Ahoj User</div>
      <div className='header__buttons'>
        <Link
          to='/'
          className='header__logout'
          onClick={() => auth.signOut()}
        >
          Odhlásiť
        </Link>
        <div className='header__menu'>
          <div className='header__menu-icon'><FaBars/></div>
          <div 
            className='header__menu-text'
            onClick={showMenu}
          >
            MENU
          </div>
        </div>
      </div>
    </header>
    <main className='video-section'>
      <div className='video-section__video'>
        <Video video={data.videoUrl}/>
      </div>
      <div className='video-section__infopanel'>
        <h2 className='video-section__infopanel-heading'>
          Video Title
        </h2>
      </div>
    </main>
    <TodoContainer />
  </div>
)

const mapDispatchToProps = dispatch => ({
  showMenu: () => dispatch(showMenu())
})

export default connect(null, mapDispatchToProps)(VideoEditor);