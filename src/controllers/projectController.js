const projectService = require("../services/projectService");


const getAllProjects = async (req, res)=>{
    console.log('projects v1 ');

    const allProjects = await projectService.getAllProjects();
    res.send({ status: "OK", data: allProjects });
}

const getProjectById = async (req, res)=>{
    console.log(req.params);

    const id = req.params.id;
    if(!id){
        return;
    }
    const project =await projectService.getProjectById(id);
    if(project.length===0){
        res.send({ status: "ERROR", data: 'Project no found' });
    }
    res.send({ status: "OK", data: project });
}

const createProject = async (req, res)=>{
    const { body } = req;

    const project =await projectService.createProject(body.name, body.body);

    if(project){
        res.send({ status: "ERROR", data: 'data incomplete' });
    }
    res.send({ status: "OK", data: project });
}

const updateProject = async (req, res)=>{
    console.log(req.params.id);

    const { body } = req;
    const id = req.params.id;

    const project =await projectService.updateProject(body.name, body.body, id);

    if(project.length===0){
        res.send({ status: "ERROR", data: 'data incomplete' });
    }
    res.send({ status: "OK", data: project });
}

const deleteProject = async (req, res)=>{
    const id = req.params.id;
    if(!id){
        return;
    }
    const project =await projectService.deleteProject(id);
    if(!project){
        res.send({ status: "ERROR", data: 'Project no found' });
    }
    res.send({ status: "OK", data: 'Project delete correctly.' });
}

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
};