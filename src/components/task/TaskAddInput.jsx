import React from 'react';
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList
}) => {


  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === "") return;//追記

    setTaskList([...taskList,
      {
      id: taskId,
      draggableId: `task-${taskId}`,
      text:inputText,
    }
  ]);
    setInputText('');
  }

const handleChange = (e) => {
  setInputText(e.target.value);
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='taskAddInput' type="text" placeholder='add a task' value={inputText} onChange={handleChange}/>
      </form>
    </div>
  )
}