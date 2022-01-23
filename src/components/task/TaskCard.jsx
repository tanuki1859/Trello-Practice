import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
import { TaskAddInput } from './TaskAddInput'
import { TaskCardDeleteButton } from './TaskCardDeleteButton'
import { TaskCardTitle } from './TaskCardTitle'
import { Tasks } from './Tasks'

export const TaskCard = ({taskCardsList,setTaskCardsList,taskCard,index}) => {
    const [inputText,setInputText] = useState('');
    const [taskList,setTaskList] = useState([]);

  return (
      <Draggable draggableId={taskCard.id} index={index}>
          {(provided) => (
                <div className="taskCard" ref={provided.innerRef}
                {...provided.draggableProps}
                >

                <div className='taskCardTitleArea'
                    {...provided.dragHandleProps}
                    >
                    <TaskCardTitle />
                    <TaskCardDeleteButton 
                    taskCardsList={taskCardsList} 
                    setTaskCardsList={setTaskCardsList}
                    taskCard={taskCard}
                    />
                </div>
                <TaskAddInput 
                inputText={inputText} 
                setInputText={setInputText} 
                taskList={taskList} 
                setTaskList={setTaskList}
                />
                <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList}/>
                </div>
          )}
    </Draggable>
  )
}