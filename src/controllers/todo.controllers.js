const TodoServices = require("../services/todo.services");

const getTodosByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const result =  await TodoServices.getByUser(userId);
        res.json(result);
    } catch (error) {
        res.status(400).json(error);
    };
};

const createTodo = async (req, res) => {
    try {
        const newTodo = req.body;
        const result = await TodoServices.create(newTodo);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    };
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const todo = { id, data };
        await TodoServices.update(todo);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    };
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await TodoServices.delete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    };
};

module.exports = {
    getTodosByUser,
    createTodo,
    updateTodo,
    deleteTodo,
}