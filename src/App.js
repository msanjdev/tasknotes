import React, { useState } from 'react';

import TaskNote from './TaskNote';



function App() {

  const [noteTitles, setNoteTitles] = useState([])

  return (
    <div className="App">
      <h1 className="App-header">
          Task List
      </h1>{
        noteTitles.map((title, index) => {
              return <TaskNote title={title} />
          })}
        <TaskNote title="" />
        <button className='btn-new-task-note' onClick={() => {setNoteTitles([...noteTitles, ""])}}>+</button>
    </div>
  );
}

export default App;
