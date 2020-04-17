const db = require('./db-config.js')

module.exports = {
    getResources
}

function getResources() {
    return db('resources');
}