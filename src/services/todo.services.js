const Category = require("../models/categories.models");
const Todo = require("../models/todos.models");
const User = require("../models/user.models");

class TodoServices {
    static async getByUser(userId) {
        try {
            const todos = await Todo.findAll({
                order: ['id'],
                attributes: ['id', 'title', 'description', 'status', 'updatedAt'],
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    },{
                        model: Category,
                        attributes: ['name'],
                    }
                ],
                where: { userId },
            });
            return todos;
        } catch (error) {
            throw error;
        };
    };

    static async create(newTodo) {
        try {
            const todo = await Todo.create(newTodo);
            return todo;
        } catch (error) {
            throw error;
        };
    };

    static async update(todo) {
        try {
            const { id, data } = todo;
            await Todo.update(data, {
                where: { id },
            },);
            return;
        } catch (error) {
            throw error;
        };
    };

    static async delete(id) {
        try {
            await Todo.destroy({ where: { id } });
            return;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = TodoServices;