const { Router } = require('express');
const { createTodo, updateTodo, deleteTodo, getTodosByUser } = require('../controllers/todo.controllers');

const router = Router();

router.get('/api/v1/todos/all/:userId', getTodosByUser);
router.post('/api/v1/todos/create', createTodo);
router.put('/api/v1/todos/:id', updateTodo);
router.delete('/api/v1/todos/:id', deleteTodo);

module.exports = router;