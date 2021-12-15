import "./App.css";
import Header from './components/Header';
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";

function App() {

const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: false,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: true,
    },
  ]);

  const [showAddTask, SetShowAddTask] = useState(false);

  const addTask = (newTask) =>{
    // console.log("add task from app.js");
    const id = Math.floor(Math.random()*100)+1;
    const addNewTask = {id,...newTask};
    setTasks([...tasks,addNewTask]);

  }

              // DELETE TASK
const deleteTask = (deletedTaskId) => {
    // console.log("deleted:", deletedTaskId);
    setTasks(tasks.filter(task => task.id !== deletedTaskId))
  }

              //TOGGLE DONE
 const toggleDone = (toggleDoneId)=>{
   setTasks(
     tasks.map((task)=>task.id===toggleDoneId ? {...task,isDone: !task.isDone} : task)
   )
  }

              // SHOW ADD TASK
  const toggleShow = () => SetShowAddTask(!showAddTask);
               
              // DELETE ALL TASKS
  const deleteAllTask = () => {
    alert("are you sure!")
    setTasks([])
  }



  return (
    <div className="container">
      <Header
      title="TASK TRAKER"
      showAddTask={showAddTask}
      toggleShow = {toggleShow}
      />
      {showAddTask && <AddTask addTask={addTask}  />}
      
      {tasks.length > 0 ? ( <Tasks tasks = {tasks} deleteTask={deleteTask} toggleDone={toggleDone} deleteAllTask={deleteAllTask}/>) : (<p style={{textAlign:"center" ,color:"white" ,fontWeight:"bold"}}>No Task To Show</p>)}
     
      
    </div>
  )
}

export default App;
