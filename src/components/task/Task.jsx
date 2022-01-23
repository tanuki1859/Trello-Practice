import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

export const Task = ({task,taskList,setTaskList,index}) => {
const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
};

  return (
      <Draggable index={index} draggableId={task.draggableId}>
          {(provided) => (
            <div className="taskBox" 
                key={task.id} 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                >
                <h3>{task.text}</h3>
                <button className="taskTrashButton" onClick={() => handleDelete(task.id)}><i className="fas fa-trash-alt"></i></button>
            </div>
          )}
    </Draggable>
  )
}