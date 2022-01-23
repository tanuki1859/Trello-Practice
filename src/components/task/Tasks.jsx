import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { Task } from './Task';

export const Tasks = ({taskList,setTaskList}) => {
    const handleDragEnd = (result) => {
        let remove = taskList.splice(result.source.index,1);
        taskList.splice(result.destination.index,0,remove[0]);

        setTaskList(taskList);
    };

  return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='droppable'>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {taskList.map((task,index) => (                            
                                <div key={task.id}>
                                    <Task 
                                    task={task} 
                                    taskList={taskList} 
                                    setTaskList={setTaskList}
                                    index={index}
                                    />
                                </div>
                            ))}
                            {provided.placeholder}
                        </div> 
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};