import React from 'react'
// import {FaTimes} from 'react-icons/fa'
import {FaTimesCircle} from 'react-icons/fa'

function Task({task,deleteTask,toggleDone}) {
  return (
    <div className={`task ${task.isDone ? "done" : ""}`} 
    onDoubleClick={()=>toggleDone(task.id)}>
      <h3>
        {task.text}
        <FaTimesCircle style={{color:"rgb(109, 14, 138)"}} onClick={()=>deleteTask(task.id)}/>
        </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
