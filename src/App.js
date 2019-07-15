import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component'

function App() {
  return (
    <div style={{
      position: 'relative',
      zIndex: '-999'
    }}>
      <HomePage/>
    </div>
  );
}

export default App;
