import EditTaskName from './EditTaskName';
import './TaskNote.css';
import React, { useState } from 'react';

export const TaskNote = ({title}) => {
    const [taskList, setTaskList] = useState([]);
    const [noteTitle, setNoteTitle] = useState(title);
  
    const handleTaskChange = (index) => {
      const updatedTasks = [...taskList];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      setTaskList(updatedTasks);
    };
  
    const addNewTask = (newTask) => {
      if (newTask.trim() === '') return; // Prevent adding empty tasks
      const updatedTasks = [...taskList, { text: newTask, completed: false }];
      setTaskList(updatedTasks);
    }
  
    const NewTaskItem = ({addNewTask}) => {

      const [newTask, setNewTask] = useState('');

      const handleInputChange = (event) => {
        setNewTask(event.target.value);
      };
    
      const handleAddTask = () => {
        if (newTask.trim() === '') {
          return; // Prevent adding empty tasks
        }
        addNewTask(newTask);
        setNewTask('');
      }
    
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleAddTask();
        }
      }

      return (
        <div>
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className='new-task-name'
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
      )
    }

    const TaskItem = ({task, index}) => {
      return <li key={index}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskChange(index)}
                  
                />
                <div className='task-item' style={{ color: task.completed ? 'gray' : 'none' }}>
                  <EditTaskName initialText={task.text} />
                </div>
              </li>
    }
  
    return (
      <div className='task-list-items tl-taskpad'>
        <EditTaskName initialText={noteTitle} className='task-title' />
        <div >
          <NewTaskItem addNewTask={addNewTask} />
          <ul>{
              taskList.map((task, index) => {
              return <TaskItem key={index} task={task} index={index} />
          })}
          </ul>
        </div>
      </div>
    );
  };

  export default TaskNote;