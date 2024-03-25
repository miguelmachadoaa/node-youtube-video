const connection = require('./connection');

const getAllProjects = async ()=> {
    const [query] = await connection.execute('Select * from projects');
    return query 
};

const getProjectById = async (id)=> {
    const [query] = await connection.execute('Select * from projects where id = '+id);
    return query 
};

const createProject = async (name, body)=> {
    const [query] = await connection.execute(`INSERT INTO projects (name, body) VALUES ("${name}", "${body}")`);
    return getProjectById(query.insertId) 
};


const updateProject = async (name, body, id)=> {
    let sql = `update projects set name = "${name}", body = "${body}" where id = ${id}`;
    console.log(sql);
    const [query] = await connection.execute(`update projects set name = "${name}", body = "${body}" where id = "${id}"`);
    return getProjectById(id) 
};

const deleteProject = async (id)=> {
    const [query] = await connection.execute('delete from projects where id = '+id);
    return query 
};


module.exports = { 
    getAllProjects, 
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
};