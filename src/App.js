import React, { useState } from 'react';

import TaskNote from './TaskNote';



function App() {

  const [taskNoteList, setTaskNoteList] = useState([])

  const [taskNoteData, setTaskNoteData] = useState({})

  const handleSave = () => {
    // console.log(taskNoteData)
    // window.localStorage.setItem('taskNoteData', taskNoteData)
  }

  const updateTaskDataValue = (taskData) => {
    
    // console.log(`task note before... ${JSON.stringify(taskNoteData)}`)

    let updated = {...taskNoteData}
    updated[taskData.key] = {
        title: taskData.noteTitle,
        list: taskData.taskList
    }
    setTaskNoteData(updated)

    // console.log(`task note updated... ${JSON.stringify(updated)}`)
  }

  const handleNewNote = () => {
    const newNote = <TaskNote 
                      key={taskNoteList.length} 
                      index={Date.now()} 
                      updateTaskData={updateTaskDataValue} />

    setTaskNoteList([...taskNoteList, newNote])
  }

  return (
    <div className="App">
      <h1 className="App-header">
          Task List
      </h1>
      
      {taskNoteList}
      
        <button className='btn-new-task-note' onClick={handleNewNote}>
          +
        </button>

        <div style={{display: 'block', margin: '24px'}}>
          <button className='btn-save' onClick={handleSave}>Save Task Notes</button>
      </div>
    </div>
  );
}

export default App;
