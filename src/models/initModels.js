const Category = require("./categories.models");
const Todo = require("./todos.models");
const User = require("./user.models");

const initModels = () => {
    User.hasMany(Todo);
    Todo.belongsTo(User);

    Category.hasMany(Todo);
    Todo.belongsTo(Category);
};

module.exports = initModels;