const db = require('./db-config.js');

module.exports = {
    get,
    add,
    getTasksForProject,
    addTask,
    getResourcesForProject
}

function getTasksForProject(project_id) {
    return db('tasks')
        .where('project_id', project_id)
        .join('projects', 'projects.id', 'tasks.project_id')
        .select('tasks.id'
        , 'projects.name as project_name'
        , 'projects.description as project_description'
        , 'tasks.description as task'
        , 'tasks.notes as notes')
}

function getResourcesForProject(project_id) {
    return db('project_resources')
        .where('project_id', project_id)
        .join('resources', 'project_resources.resource_id', 'resources.id')
        .select('resources.id'
        , 'resources.name'
        , 'resources.description'
        )
}

function get() {
    return db('projects');
}

function add(data) {
    return db('projects').insert(data)
        .then(([project_id]) => {
            return db('projects').where('id', project_id);
        })
}

function addTask(project_id, data) {
    return db('tasks').insert({
        project_id: project_id,
        ...data
    })
        .then(([task_id]) => {
            return db('tasks').where('id', task_id)
        })
}