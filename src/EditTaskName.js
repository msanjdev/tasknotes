import React, { useEffect, useState } from 'react';

const EditTaskName = ({ initialText, className, updateChange }) => {

  
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  
  useEffect(() => {
    if (!text) setIsEditing(true)
  },[text])

  const handleDoubleClick = () => {
    setIsEditing(true);
  }

  const handleChange = (event) => {
    setText(event.target.value);
    if (updateChange) updateChange(event.target.value);
  }
  
  const handleBlur = () => {
    setIsEditing(false);
    // Save the changes or perform any required actions here
  };

  const handleKeyDown = (event) => {
    switch(event.key) {
        case 'Enter':
            setIsEditing(false)
            break;
    
        case 'Escape':
            setIsEditing(false)
            break;

        default:
    }
  }

  return (
    <div onDoubleClick={handleDoubleClick} className={'task-item ' + className}>
      {isEditing || !text? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder='Task'
          className={'edit-task-name ' + className}
        />
      ) : 
        <>{text}</>
      }
    </div>
  );
};

export default EditTaskName;