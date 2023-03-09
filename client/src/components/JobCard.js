// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



// function JobCard({ id, index, company, title }) {
//     const { loading, data, error } = useQuery(QUERY_JOBS)

//     const jobData = data || []
//     console.log(jobData)


//     return (
//         <Draggable draggableId={id} index={index}>
//             {(provided) => (
//                 <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                 >
//                     <div className="jobCard">
//                         <p>{company}</p>
//                         <p>{title}</p>
//                     </div>
//                 </div>
//             )}
//         </Draggable>
//     );
// }

// export default JobCard