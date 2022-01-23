import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
import { useState } from 'react/cjs/react.development'
import { AddTaskCardButton } from './button/AddTaskCardButton'
import { TaskCard } from './TaskCard'

export const TaskCards = () => {
    const [taskCardsList,setTaskCardsList] = useState([{
        id:'0',
        draggableId:'item0',
    }]);

    const hadleDragEnd = (result) => {
        let remove = taskCardsList.splice(result.source.index,1);
        taskCardsList.splice(result.destination.index,0,remove[0]);
        setTaskCardsList(taskCardsList);
    };

  return (
      <DragDropContext onDragEnd={hadleDragEnd}>
          <Droppable droppableId='droppable' direction='horizontal'>
              {(provided) => (
                <div className='taskCardsArea' {...provided.droppableProps} ref={provided.innerRef}>
                {taskCardsList.map((taskCard,index) => (
                <TaskCard 
                key={taskCard.id} 
                taskCardsList={taskCardsList} 
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
                index={index}
                />
                ))}
                {provided.placeholder}
                <AddTaskCardButton 
                taskCardsList={taskCardsList} 
                setTaskCardsList={setTaskCardsList}
                />
                </div>
              )}
        </Droppable>
    </DragDropContext>
  )
}