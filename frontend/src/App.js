import { useState, useEffect } from 'react';
import './styles/App.css';
import TaskForm from './components/TaskForm';
import TaskCarousel from './components/TaskCarousel';
import TaskFilter from './components/TaskFilter';

function App() {
  // Tasks list
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  

  // Rendering
  useEffect(() => {
    fetchTasks();
  }, []);


  // Function to recive the tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:4000/api/tasks');
    const data = await response.json();
    // Update the list
    setTasks(data);
  };


  // Function to add task
  const handleAddTask = async (taskData) => {
    // The POST request
    const response = await fetch('http://localhost:4000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });
    const newTask = await response.json();
    // Update the list with the new task
    setTasks([...tasks, newTask]);
  };

  // Function to delete tasks
  const handleDeleteTask = async (id) => {
    // The DELETE request
    await fetch(`http://localhost:4000/api/tasks/${id}`, { method: 'DELETE' });
    // Update the list
    setTasks(tasks.filter(task => task.id !== id));
  };


  // Funcion to update status (complete)
  const handleToggleTask = async (id) => {
    // The PATCH request
    const response = await fetch(`http://localhost:4000/api/tasks/${id}/toggle`, { method: 'PATCH' });
    const updatedTask = await response.json();
    // Update the list- only the requied task!
    setTasks(tasks.map(task => task.id === id ? updatedTask : task));
  };


  // Filtering!
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed; // only complete
    if (filter === 'pending') return !task.completed;  // only not complete
    return true; // 'all'
  });

  return (
    // Headline
    <div className="App" style={{ padding: '20px' }}>
      <h1>Task Manager</h1>
      
      <TaskForm addTask={handleAddTask} />

      <div className="tasks-section">
        <h2 style={{display: 'flex', justifyContent: 'center'}}>My Tasks</h2>
        
        {/* Present the filtered tasks in carousel */}
        <TaskFilter currentFilter={filter} setFilter={setFilter} />

        <TaskCarousel 
            tasks={filteredTasks} 
            deleteTask={handleDeleteTask}
            toggleTask={handleToggleTask}
        />
      </div>
    </div>
  );
}

export default App;