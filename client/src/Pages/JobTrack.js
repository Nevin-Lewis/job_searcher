// import Container from 'react-bootstrap';
// import {DndContext, closestCenter};
// import JobTrackList from '../Components/JobTrackList';
// import JobCard from '../Components/JobCard';
import {Draggable, Droppable} from react-beautiful-dnd;

// ReactDOM.render(<JobCard />, document.getElementById('root'))

// const styles = {

// };

function JobTrack() {
    //add way to correlate to what stage you are in, in the model, and add mutation for updating job stage
    const fakeData = [
    {
        company: "Bonterra Tech",
        title: "Frontend Developer",
        jobStage: 2
    },
    {
        company: "Bonterra Tech",
        title: "Frontend Developer",
        jobStage: 3
    },
    {
        company: "Bonterra Tech",
        title: "Frontend Developer",
        jobStage: 2
    }
]


    return (
        <div>
        <h1>JobTrack</h1>
        {/* // {</JobTrackList>} */}
        <Draggable draggableId="jobStage">
            {/* draggable id will need to be = to droppable ID to render*/}
            {/* card component */}
        </Draggable>
        <Droppable droppableId="1"></Droppable>
        <Droppable droppableId="2"></Droppable>
        <Droppable droppableId="3"></Droppable>
        <Droppable droppableId="4"></Droppable>
        <Droppable droppableId="5"></Droppable>
        </div>
    );
}

export default JobTrack;