const express = require('express');

const Resources = require('./resourceModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources().then(resources => res.status(200).json(resources))
    .catch(error => res.status(500).json({ error: error.message }))
})

module.exports = router;