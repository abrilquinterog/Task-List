export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete them?")){
            cleanTasks()
        }
    }

    return(
        <div>
            <input type="checkbox" 
            checked={isChecked}
            onChange={e=> setShowCompleted(e.target.checked)}
            />{" "} 
            <label>Show tasks done</label>
            <button onClick={handleDelete}> Clear </button>
        </div>
    )
}