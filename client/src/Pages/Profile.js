import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./../App.css";
import MuiDrawer from '@mui/material/Drawer';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { mainListItems, secondaryListItems } from '../components/listItems';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
// import JobCard from "../components/JobCard";





import Auth from '../utils/auth';
import { useQuery } from "@apollo/client";
import { QUERY_JOBS } from "../utils/queries.js"

//add way to correlate to what stage you are in, in the model, and add mutation for updating job stage
const fakeData = {
    jobs: [
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
    ]
};







function JobCard({ id, index, company, title }) {
    // const { loading, data, error } = useQuery(QUERY_JOBS)

    // const jobData = data || []
    // console.log(jobData)


    return (
        <Draggable draggableId={`${company}`} key={id} index={index} >
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

    const { loading, data, error } = useQuery(QUERY_JOBS)

    const jobData = data?.jobs || []
    // console.log(jobData)



    const Navigate = useNavigate();

    const changePage = () => {
        Navigate('/JobDetails');
    }

    const [wishlist, setwishlist] = useState(
        fakeData.jobs.filter((app) => app.jobStage === 1)
    );
    const [applied, setapplied] = useState(
        fakeData.jobs.filter((app) => app.jobStage === 2)
    );
    const [phone, setphone] = useState(
        fakeData.jobs.filter((app) => app.jobStage === 3)
    );
    const [next, setnext] = useState(
        fakeData.jobs.filter((app) => app.jobStage === 4)
    );
    const [offer, setoffer] = useState(
        fakeData.jobs.filter((app) => app.jobStage === 5)
    );

    // alternate way to manage our state

    // const [applications, setApplications] = useState(
    //     {
    //         wishlist: [],
    //         applied: [],
    //         phone: [],
    //         next: [],
    //         offer: []
    //     }
    // )

    useEffect(() => {
        const newwishlist = jobData.filter((app) => app.jobStage === 1)
        setwishlist(newwishlist)

        const newapplied = jobData.filter((app) => app.jobStage === 2)
        setapplied(newapplied)

        const newphone = jobData.filter((app) => app.jobStage === 3)
        setphone(newphone)

        const newnext = jobData.filter((app) => app.jobStage === 4)
        setnext(newnext)

        const newoffer = jobData.filter((app) => app.jobStage === 5)
        setoffer(newoffer)

        console.log(newwishlist, newapplied, newphone, newnext, newoffer)
    }, [jobData])


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

            <h1>JobTrack
                <BsSearch className="searchIcon"></BsSearch>
            </h1>
            <Button variant="contained" onClick={changePage}> Add Job
                <AiOutlineCheckCircle />
            </Button>


            <div className="jobTrack">
                <List >
                    {mainListItems}

                    <Divider sx={{ my: 1 }} />
                    {secondaryListItems}

                </List>

                {Auth.loggedIn() && (
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        {/* Wishlist */}
                        <Droppable droppableId="wishlist">
                            {(provided) => (
                                <div className="jobList" id="wishlist">
                                    <div className="title">Wishlist</div>
                                    <div {...provided.droppableProps} ref={provided.innerRef}>

                                        {wishlist.map(({ id, company, title, jobStage }, index) => {

                                            return (
                                                <JobCard key={id} id={id} company={company} title={title} index={index} />


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
                                                <JobCard key={id} id={id} company={company} title={title} index={index} />
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
                                                <JobCard key={id} id={id} company={company} title={title} index={index} />
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
                                                <JobCard key={id} id={id} company={company} title={title} index={index} />
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
                                                <JobCard key={id} id={id} company={company} title={title} index={index} />
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



