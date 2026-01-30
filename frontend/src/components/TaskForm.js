import { useState } from 'react';

function TaskForm({ addTask }) {
  // Save the data of the task
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' 
  });

  const handleSubmit = (e) => {
    // Prevent reload of the page when submitted
    e.preventDefault();
    
    addTask(formData);
    // Reset the form
    setFormData({ title: '', description: '', priority: 'medium' });
  };

  return (
    // When we click on the button, the data saved (the form submitted)
    <form onSubmit={handleSubmit}>
        
        {/* Title input */}
        <div>
        <input 
          placeholder="Title"
          value={formData.title}
          // Saving the data the user type "real time"
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          style={{ padding: '10px', marginBottom: '10px' }}
        />
        </div>

        {/* Description input */}
        <div>
          <input
            placeholder="Description"
            value={formData.description}
            // Saving the data the user type "real time"
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            style={{ width: '50%', padding: '10px', marginBottom: '10px' }}
          />
        </div>

        {/* Priority selection */}
        <select 
          value={formData.priority}
          onChange={(e) => setFormData({...formData, priority: e.target.value})}
          style={{ padding: '10px', marginBottom: '10px' }}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      
      {/* Submittion button */}
      <div>
      <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white'}}>
        Add Task
      </button>
      </div>
    </form>
  );
}

export default TaskForm;