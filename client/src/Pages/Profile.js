import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./../App.css";



import Auth from '../utils/auth';
import { useQuery } from "@apollo/client";
import { QUERY_JOBS } from "../utils/queries.js"

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







function JobCard({id, index, company, title}) {
  const {loading, data, error} = useQuery(QUERY_JOBS)
  console.log("Loading: ", loading)
  console.log("Data: ", data)
  console.log("Error: ", error)
  
  const jobData = data?.getJobs || []
  
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="jobCard">
            <p>{company}</p>
            <p>{title}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
}

function Profile() {
  const [wishlist, setwishlist] = useState(
    fakeData.filter((app) => app.jobStage === 1)
  );
  const [applied, setapplied] = useState(
    fakeData.filter((app) => app.jobStage === 2)
  );
  const [phone, setphone] = useState(
    fakeData.filter((app) => app.jobStage === 3)
  );
  const [next, setnext] = useState(
    fakeData.filter((app) => app.jobStage === 4)
  );
  const [offer, setoffer] = useState(
    fakeData.filter((app) => app.jobStage === 5)
  );

  const move = (source, destination, droppableSource, droppableDestination) => {
    console.log(source, destination, droppableSource, droppableDestination);
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const getList = (id) => {
    console.log("id", id);

    const list = eval(id);
    console.log(list);
    return list;
  };
  // this.state[this.id2List[id]];

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      // const items = reorder(
      //     this.getList(source.droppableId),
      //     source.index,
      //     destination.index
      // );
      // let state = { items };
      // if (source.droppableId === 'droppable2') {
      //     state = { selected: items };
     
      // }
      // this.setState(state);
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      console.log("source.droppableId " + source.droppableId)
      console.log("destination.droppableId " + destination.droppableId)
      console.log("result " + JSON.stringify(result))
      console.log("result specific " + JSON.stringify(result[source.droppableId]))
      eval("set" + source.droppableId)(result[source.droppableId]);
      eval("set" + destination.droppableId)(result[destination.droppableId]);

    }
  };



  return (
    
    <div>
      <h1>JobTrack</h1>
      <div className="jobTrack">
      { Auth.loggedIn() && (
      <DragDropContext onDragEnd={handleOnDragEnd}>
          {/* Wishlist */}
          <Droppable droppableId="wishlist">
            {(provided) => (
              <div className="jobList" id="wishlist">
                <div className="title">Wishlist</div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {wishlist.map(({ id, company, title, jobStage }, index) => {
                    return (
                    <JobCard key={id} id={id} company={company} title={title} index={index}/>
                    );
                  })}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>

          {/* Applied */}
          <Droppable droppableId="applied">
            {(provided) => (
              <div className="jobList" id="applied">
                <div className="title">Applied</div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {applied.map(({ id, company, title, jobStage }, index) => {
                    return (
                      <JobCard key={id} id={id} company={company} title={title} index={index}/>
                    );
                  })}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>

          {/* Phone Interview */}
          <Droppable droppableId="phone">
            {(provided) => (
              <div className="jobList" id="phone">
                <div className="title">Phone Interview</div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {phone.map(({ id, company, title, jobStage }, index) => {
                    return (
                      <JobCard key={id} id={id} company={company} title={title} index={index}/>
                    );
                  })}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>

          {/* Next Interviews */}
          <Droppable droppableId="next">
            {(provided) => (
              <div className="jobList" id="next">
                <div className="title">Next Interviews</div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {next.map(({ id, company, title, jobStage }, index) => {
                    return (
                      <JobCard key={id} id={id} company={company} title={title} index={index}/>
                    );
                  })}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>

          {/* Job Offer */}
          <Droppable droppableId="offer">
            {(provided) => (
              <div className="jobList" id="offer">
                <div className="title">Job Offer</div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {offer.map(({ id, company, title, jobStage }, index) => {
                    return (
                      <JobCard key={id} id={id} company={company} title={title} index={index}/>
                    );
                  })}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
        )} 
      </div>
     
    </div>
  );
             
};
export default Profile;

