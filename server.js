const express = require('express');

const projectRouter = require('./data/projectRouter.js');
const taskRouter = require('./data/tasksRouter.js');
const resourceRouter = require('./data/resourceRouter.js');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);

server.get("/", (req, res) => {
    res.send("<h1>It's up!</h1>")
})

module.exports = server;