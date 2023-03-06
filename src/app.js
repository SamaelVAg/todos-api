const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/user.routes');
const todoRoutes = require('./routes/todo.routes');

initModels();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

db.authenticate()
    .then(() => console.log('Database connected!'))
    .catch((error) => console.log(error));

db.sync({ force: false })
    .then(() => console.log('Database synced!'))
    .catch((error) => console.log(error));

app.get('/', (req, res) => {
    try {
        res.send('TODO API server running!')
    } catch (error) {
        res.status(400).json(error);
    };
});

app.use(userRoutes);
app.use(todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});