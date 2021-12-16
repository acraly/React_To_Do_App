// import React from 'react'
import Task from "./Task";

function Tasks({tasks,deleteTask,toggleDone,deleteAllTask}) {
  console.log("tasks:",tasks);
  
  return (
    <div>
      {
       tasks.map((task)=>
       <Task 
       key={task.id} 
       task={task} 
       deleteTask={deleteTask}
       toggleDone={toggleDone}
       deleteAllTask={deleteAllTask}
       />)
     }

      <button className="deleteAllBtn" onClick={deleteAllTask}><span style={{color:"red",fontWeight:"bold"}}>!</span> Delete All </button>

    </div>

    
  )
  
}

export default Tasks

