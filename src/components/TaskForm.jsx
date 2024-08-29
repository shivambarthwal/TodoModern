import React,{useState} from 'react'
import "./TaskForm.css"
import Tag from "./Tag";
import { FaPlus } from "react-icons/fa";
function TaskForm({setTasks}) {
  
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags:[]
  })
  

  const checkTag = (tag) =>{
    return taskData.tags.some(item => item === tag)
  }

  const selectTag = (tag) =>{
    if(taskData.tags.some(item => item === tag)){
    const filterTag =  taskData.tags.filter(item => item !== tag);
    setTaskData((prev) => {
      return {...prev, tags: filterTag };
    });
    }else{
      setTaskData((prev) => {
        return { ...prev, tags: [ ...prev.tags , tag] };
      })
    }
  }
  

  const handleChange = (event) => {
    const {name , value} = event.target;

    setTaskData(prev =>{
      return {...prev, [name]: value }
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "", 
      status: "todo", 
      tags:[]})
  }

  
  
  return (
    <header className="app_header">
    <form onSubmit={handleSubmit}>
        <input type="text" 
        name='task'
        value={taskData.task}
        className="task_input" 
        placeholder ="Enter your task"
        onChange={handleChange}
        />


        <div className="task_form_bottom_line">
            <div>
            <Tag tagName="Personal" selectTag ={selectTag} selected ={checkTag("Personal")} />
            <Tag tagName="Finance" selectTag ={selectTag} selected ={checkTag("Finance")}/>
            <Tag tagName="Work" selectTag ={selectTag} selected ={checkTag("Work")} />
            <Tag tagName="Health" selectTag ={selectTag} selected ={checkTag("Health")} />
            </div>

            <div className='button-container'>
            <select name='status' value={taskData.status} className='task_status' onChange={handleChange}>
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
            <button type="submit" className='task_submit'>
            <FaPlus />
            </button>
            </div>
        </div>
    </form>
  </header>
  )
}

export default TaskForm