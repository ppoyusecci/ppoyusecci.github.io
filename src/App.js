import React from 'react';
import './App.css';
import { Loading } from './components/loading/loading.main';

function App() {
  return (
    <div className="background">


      <div className="App-header">
        <div className="App-header-logo">
          <Loading color="red"/>
        </div>
        
        <div className="App-header-text">
          This is a personal website about Tom
        </div>
      </div>

      <body className="body">
        <a
          className="App-link"
          href="https://github.com/ppoyusecci"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github Page
        </a>
      </body>


    </div>
  );
}

export default App;
