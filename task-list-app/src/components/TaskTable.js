import { TaskRow } from "./TaskRow"

export const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {
    
    const taskTableRows = (doneValue) =>{
        console.log(doneValue)
        return(
            tasks
            .filter(task=> task.done === doneValue)
            .map(task=>(
                <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
            ))
        )
    }
    
    return (
        <table className="table table-secondary table-striped-columns">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>

      </thead>
      <tbody>
          {
            taskTableRows(showCompleted)
          }

      </tbody>

    </table>



    )
}