import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import DashBoard from './pages/dashboardpage/dashboard.component';
import VideoEditor from './pages/video-editor/videopage.component';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/admin' component={DashBoard}/>
        <Route path='/video/:id' component={VideoEditor}/>
      </Switch>
    </div>
  );
}

export default App;
