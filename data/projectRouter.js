const express = require('express');

const Projects = require('./projectModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.get().then(projects => res.status(200).json(projects))
    .catch(error => res.status(500).json({ error: error.message }))
})

// router.get('/:id', (req, res) => {
//     Projects.get(req.params.id).then(project => {
//         res.status(200).json(project)
//     })
//     .catch(error => res.status(500).json({ error: error.message }))
// })

router.post('/', (req, res) => {
    Projects.add(req.body).then(project => res.status(201).json(project))
    .catch(error => res.status(500).json({ error: error.message }));
})

router.get('/:id/tasks', (req, res) => {
    Projects.getTasksForProject(req.params.id).then((tasks) => res.status(200).json(tasks))
    .catch(error => res.status(500).json({ error: error.message }))
})

router.get('/:id/resources', (req, res) => {
    Projects.getResourcesForProject(req.params.id).then((resources) => res.status(200).json(resources))
    .catch(error => res.status(500).json({ error: error.message }))
})

router.post('/:id/tasks', (req, res) => {
    Projects.addTask(req.params.id, req.body).then(newTask => res.status(201).json(newTask))
    .catch(error => res.status(500).json({ error: error.message }));
})

module.exports = router;