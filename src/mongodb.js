const {  ObjectId } = require("mongodb");
const connection = require('./connection');
const mongodb = require('./connection/mongodb');

const getAllProjects = async ()=> {

    const budget = mongodb.collection('budget');

    const data = await budget.find({}).toArray();

    data.forEach((d)=>{
        d.id = d._id
    });

    return data; 
};

const getProjectById = async (id)=> {

    const budget = mongodb.collection('budget');

    let data = null;

    var o_id = new ObjectId(id);

    //await budget.findOne( { "_id": id } );

    data = await budget.find({_id: new ObjectId(id)}).toArray();

    return data;
};

const createProject = async (name, body)=> {

    const budget = mongodb.collection('budget');

    await budget.insertOne({ name:name , body:body });

};


const updateProject = async (name, body, id)=> {

    const budget = mongodb.collection('budget');

    await budget.updateOne(
        {_id: new ObjectId(id)},
        { $set: { 'name': name, 'body':body } }
      );

    return getProjectById(id) 
};

const deleteProject = async (id)=> {
    
    const budget = mongodb.collection('budget');

    try {
        await budget.deleteOne({_id: new ObjectId(id)});
    } catch (error) {
        return false;
    }

    return true;
};


module.exports = { 
    getAllProjects, 
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
};