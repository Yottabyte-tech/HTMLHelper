import React from 'react';
import './App.css';
import Font from './Blocks/Font.jsx';
import MenuSelect from './MenuSelect.jsx';

function App() {
  return (
    <>
      <h1 style={{}}>Text Workspace</h1>
      <div id='full-workspace'>
        <div id='sidebar'>
            <MenuSelect text="Font and Styling" />
        </div>
        <div id='sidebar-two'>
            <MenuSelect text="Font and Styling" />
        </div>
        <div id='workspace'>
            <Font />
        </div>
      </div>
      <div id='text-display'>
        <p className='no-style'>Output Text</p>
      </div>
    </>
  );
}

export default App;
