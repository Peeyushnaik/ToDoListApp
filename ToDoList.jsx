import React,{useState} from "react";
function ToDoList(){

const [tasks,setTasks] = useState(["Go to work","Learn React","Gym"]);
const [newTask,setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value); //Ye show karata hai input box mein jo type karoge
  }
  function addTask(){
    if(newTask.trim() !== ""){
        setTasks(t => [...t ,newTask])
        setNewTask(""); //Placeholder ko khali karega after add is clicked
    }
  }
  function deleteTask(index){
    setTasks(tasks.filter((_,i) => i !== index ));
  }
  function moveTaskUp(index){
    const updatedTasks = [...tasks];
    if(index > 0){
    [updatedTasks[index],updatedTasks[index - 1]] = 
    [updatedTasks[index - 1],updatedTasks[index]]
    setTasks(updatedTasks)
    }
  }
  function moveTaskDown(index){
    const updatedTasks = [...tasks];
    if(index < tasks.length - 1 )
    [updatedTasks[index],updatedTasks[index + 1]] = 
    [updatedTasks[index + 1],updatedTasks[index]]
    setTasks(updatedTasks)

  }
  return(
    <div className = "to-do-list">
      <h1>To Do List App</h1>
      <div>
        <input value ={newTask} // Jo bhi mein type karunga input field mein newTask usko store karayega
        type = "text"
        placeholder = "Enter a task..."
        onChange={handleInputChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>

      <ol>
        {tasks.map((task,index) => 
        <li key = {index}>
            <span className = "text">{task}</span>
            <button class = "delete-button"
                    onClick={() =>  deleteTask(index)}>
                    Delete Task
            </button>
            <button class = "move-button"
                    onClick={() => moveTaskUp(index)}>
                    👆
            </button>
            <button class = "move-button"
                    onClick={() =>  moveTaskDown(index)}>
                    👇 
            </button>
        </li>
       )}
      </ol>
    </div>
  );
}
export default ToDoList