const queries = require('../queries');
const mongodb = require('../mongodb');

const getAllProjects = async ()=>{
    console.log('projects v1 ');

    await mongodb.getAllProjects();

    const allProjects = await mongodb.getAllProjects();
    //const allProjects = await queries.getAllProjects();
    //const allProjects = await firebase.getAllProjects();
    return allProjects;
}

const getProjectById = async (id)=>{
    const project = await mongodb.getProjectById(id);
    return project;
}

const createProject = async (name, body)=>{

    const project = await mongodb.createProject(name, body);
    //const project = await queries.createProject(name, body);
    return project;
}

const updateProject = async (name, body, id)=>{

    const project = await mongodb.updateProject(name, body, id);
    return project;
}

const deleteProject = async (id)=>{

    const project = await mongodb.deleteProject(id);
    return project;
}
module.exports = {
    getAllProjects,
    getProjectById,
    createProject, 
    updateProject,
    deleteProject
};