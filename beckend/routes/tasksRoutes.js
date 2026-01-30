const express = require('express');
const router = express.Router();

// import the controller
const taskController = require('../middleware/taskController');

// Route definition

router.get('/', taskController.getTasks);       // GET /tasks
router.post('/', taskController.addTask);       // POST /tasks
router.put('/:id', taskController.updateTask);      // PUT /tasks/:id
router.delete('/:id', taskController.deleteTask); // DELETE /tasks/:id
router.patch('/:id/toggle', taskController.toggleCompleted); // PATCH /tasks/:id

module.exports = router;