const db = require('./db-config.js')

module.exports = {
    getResources,
    getResourceById,
    removeResource
}

function getResources() {
    return db('resources');
}

function getResourceById(resource_id) {
    return db('resources').where('id', resource_id);
}

function removeResource(resource_id) {
    return db('resources').where('id', resource_id).del();
}