import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day: 'Feb 5th at 14:30h',
        reminder: true,
    },
    {
        id:2,
        text:'Metting at School',
        day: 'Feb 6th at 17:30h',
        reminder: true,
    },
    {
        id:3,
        text:'Food Shopping',
        day: 'Feb 5th at 16:30h',
        reminder: false,
    },
])
/*Add Task*/
const addTask = (task) =>{
 // console.log(task)
 const id = Math.floor(Math.random()* 1000)+1
 //console.log(id) Crete random number for ID

 const newTask = {id, ...task}
 setTasks([...tasks, newTask])
}

/*Delete Task*/
const deleteTask = (id) => {
   //console.log('delete', id)
   setTasks(tasks.filter((task) => task.id !== id ))
}

/*Toggle Reminder*/
const toggleReminder = (id) => {
  //console.log(id)
  setTasks(tasks.map((task) => task.id ===id 
  ? {...task, reminder: !task.reminder} : task))
} 

  return (
    <div className='container'>
      <Header
       onAdd={() => setShowAddTask(!showAddTask)}
       showAdd={showAddTask}
      
      />
      {showAddTask && <AddTask onAdd={addTask} showAdd={showAddTask}/>}
     {tasks.length > 0 ?<Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}
       />: 'No Tasks to show' }
    </div>
  )
}
export default App;
