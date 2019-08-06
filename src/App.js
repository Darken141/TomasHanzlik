import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import DashBoard from './pages/dashboardpage/dashboard.component';
import VideoEditor from './pages/video-editor/videopage.component';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/admin' component={DashBoard}/>
      <Route path='/video' component={VideoEditor}/>
    </Switch>
  );
}

export default App;
