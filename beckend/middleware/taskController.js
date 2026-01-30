// The Database
let tasks = [
    {
        id: 1,
        title: "Task 1",
        description: "Example task",
        completed: false,
        createdAt: new Date(),
        priority: "high"
    }
];

// Route for view
const getTasks = (req, res) => {
    res.json(tasks);
};

// Route for add
const addTask = (req, res) => {
    // Recive the text from the request
    const { title, description, priority } = req.body; 

    // Missing fields handle
    if (!title || !description || !priority) {
        return res.status(400).json({ message: "Fill all the fields!" });
    }

    const newTask = {
        id: Date.now(), // Unique id based on the time
        title,
        description,
        completed: false, // New task- not complete by default
        priority,
        createdAt: new Date()
        
    };

    // Adding the new task
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Route dor update
const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    // Finding the required task
    const taskIndex = tasks.findIndex(t => t.id === id);
    
    // If the task exist, update fields
    if (taskIndex > -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
        res.json(tasks[taskIndex]);
    } 
    // If the task not found
    else {
        res.status(404).json({ message: "Task not found" });
    }
};

// Route for delete
const deleteTask = (req, res) => {
    const id = parseInt(req.params.id)
    const initialLength = tasks.length;
    
    // Find the right task
    tasks = tasks.filter(t => t.id !== id);
    
    // Check if the task deleted
    if (tasks.length < initialLength) {
        res.json({ message: "Deleted successfully" });
    } else {
        res.status(404).json({ message: "Failed to delete" });
    }
};

// Route for completion
const toggleCompleted = (req, res) => {
    const id = parseInt(req.params.id)
    
    // finding the right task
    const task = tasks.find(t => t.id === id);
    
    if (task) {
        // Update the state
        task.completed = !task.completed
        res.json(task)
    } else {
        res.status(404).json({ message: "Failed to complete" });
    }
    
}

// Export
module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
    toggleCompleted
};
