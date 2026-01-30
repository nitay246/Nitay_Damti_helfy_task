
function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    
      <div>
        {/* If the task marked as complete- put a line */}
        <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </h3>
        <div>
          {task.description}
        </div>
        <div>
          {task.priority}
        </div>
      
      {/* Complete button */}
      <div>
        <button onClick={() => toggleTask(task.id)} style={{margin: '2px', padding: '2px'}}>
          {task.completed ? 'Undo' : 'Done'}
        </button>
      {/* Delete button */}
        <button 
          onClick={() => deleteTask(task.id) }
          style={{ margin: '2px', color: 'red',padding: '2px' }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;