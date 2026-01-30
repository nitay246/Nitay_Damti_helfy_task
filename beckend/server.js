const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/tasksRoutes');

// Creating the server
const app = express();
const PORT = 4000; // port for the server

// Middlewares
app.use(cors()); // enable connection
app.use(express.json());

// Connection to the router
app.use('/api/tasks', tasksRoutes);

// Activation
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});