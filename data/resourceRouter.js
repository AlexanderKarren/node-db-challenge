const express = require('express');

const Resources = require('./resourceModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources().then(resources => res.status(200).json(resources))
    .catch(error => res.status(500).json({ error: error.message }))
})

router.get('/:id', (req, res) => {
    Resources.getResourceById(req.params.id).then(([resource]) => res.status(200).json(resource))
    .catch(error => res.status(500).json({ error: error.message }))
})

router.delete('/:id', (req, res) => {
    Resources.getResourceById(req.params.id).then(([resource]) => {
        Resources.removeResource(req.params.id)
        .then(response => {
            res.status(200).json(resource);
        })
        .catch(error => res.status(500).json({ error: error.message }))
    })
    .catch(error => res.status(500).json({ error: error.message }))
})

module.exports = router;