import { useState } from "react";

const TaskCreator = ({createNewTask}) =>{
  const [newTaskName, setNewTaskName] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    setNewTaskName('')
    }

    return(

        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        ></input>
        <button className="btn btn-primary">Save task</button>
      </form>
    )
}

export default TaskCreator;