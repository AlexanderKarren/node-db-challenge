const db = require('./db-config.js');

module.exports = {
    get,
}

function get(id) {
    if (id) return db('tasks').where('id', id);
    else return db('tasks');
}