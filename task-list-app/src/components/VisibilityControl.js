export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete them?")){
            cleanTasks()
        }
    }

    return(
        <div>
            <div className="form-check form-switch">
            <input 
            className="form-check-input"
            type="checkbox" 
            checked={isChecked}
            onChange={e=> setShowCompleted(e.target.checked)}
            />{" "} 
            <label>Show tasks done</label>
            </div>
            <button onClick={handleDelete} className="btn btn-danger"> Clear </button>
        </div>
    )
}