// import Container from 'react-bootstrap';
// import {DndContext, closestCenter};
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./../App.css";
import Auth from '../utils/auth';
// import styled from '@emotion/styled';
// import jobCard from '../components/JobCard'
// import { id, company, title, jobStage} from <- data for job

// ReactDOM.render(<JobCard />, document.getElementById('root'))

//add way to correlate to what stage you are in, in the model, and add mutation for updating job stage
const fakeData = [
  {
    id: "1",
    company: "Google",
    title: "Frontend Developer",
    jobStage: 2,
  },
  {
    id: "2",
    company: "Bonterra Tech",
    title: "Backend Developer",
    jobStage: 3,
  },
  {
    id: "3",
    company: "Amazon",
    title: "Fullstack Developer",
    jobStage: 2,
  },
];

function JobTrack() {
  const [job, updateJob] = useState(fakeData);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from();
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateJob(items);
  }
  return (
    
    <div>
      <h1>JobTrack</h1>
      <div className="jobTrack">
      { Auth.loggedIn() && (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          {/* Wishlist */}
          <Droppable droppableId="1" className="jobList">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {job.map(({ id, company, title, jobStage }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="jobCard">
                            <p>{company}</p>
                            <p>{title}</p>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>

          {/* Applied */}
          <Droppable droppableId="2" className="jobList">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {job.map(({ id, company, title, jobStage }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="jobCard">
                            <p>{company}</p>
                            <p>{title}</p>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>

          {/* Phone Interview */}
          <Droppable droppableId="3" className="jobList">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {job.map(({ id, company, title, jobStage }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="jobCard">
                            <p>{company}</p>
                            <p>{title}</p>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>

          {/* Next Interviews */}
          <Droppable droppableId="4" className="jobList">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {job.map(({ id, company, title, jobStage }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="jobCard">
                            <p>{company}</p>
                            <p>{title}</p>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>

          {/* Job Offer */}
          <Droppable droppableId="5" className="jobList">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {job.map(({ id, company, title, jobStage }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="jobCard">
                            <p>{company}</p>
                            <p>{title}</p>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
         )}
      </div>
     
    </div>
  );
              };
export default JobTrack;

{
  /* <Draggable draggableId="jobStage"> */
}
{
  /* draggable id will need to be = to droppable ID to render*/
}
{
  /* card component */
}
{
  /* </Draggable>
        <Droppable droppableId="1"></Droppable>
        <Droppable droppableId="2"></Droppable>
        <Droppable droppableId="3"></Droppable>
        <Droppable droppableId="4"></Droppable>
        <Droppable droppableId="5"></Droppable> */
}
