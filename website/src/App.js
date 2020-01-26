import React from 'react';
import '../src/css/style.css';
import Header from './Header';
import WorkBox from './WorkBox';

function App() {
  return (
    <div className="container-fluid body">
      <div className="row justify-content-center align-items-center">
        <WorkBox />
      </div>
    </div>
  );
}

export default App;
