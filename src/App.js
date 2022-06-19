import React from 'react';
import './App.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 


function App() {
  return (
    <div className="App">
      <Tippy content = "It's me, mamburi.">
           <button className='bttn'>Click me</button>
      </Tippy>
    </div>
  );
}

export default App;
