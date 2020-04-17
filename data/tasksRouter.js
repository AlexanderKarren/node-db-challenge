const express = require('express');

const Tasks = require('./taskModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.get().then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(500).json({ error: error.message }))
})

module.exports = router;