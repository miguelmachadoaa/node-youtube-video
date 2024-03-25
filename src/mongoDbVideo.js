const {  ObjectId } = require("mongodb");
const connection = require('./connection');
const mongodb = require('./connection/mongodb');
const axios = require('axios');
const { response } = require("express");

const getAll = async ()=> {

    const video = mongodb.collection('video');

    const data = await video.find({}).toArray();

    data.forEach((d)=>{
        d.id = d._id
    });

    return data; 
};

const getById = async (id)=> {

    const video = mongodb.collection('video');

    let data = null;

    var o_id = new ObjectId(id);

    //await video.findOne( { "_id": id } );

    data = await video.find({_id: new ObjectId(id)}).toArray();

    return data;
};

const create = async (url)=> {

    const video = mongodb.collection('video');

    var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    var r = url.match(rx);
    console.log(r[1]);

    var datos = null;
    

    let videoUrl = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCVlTAocC8MYZ22O27KTGJp5z3LgD5r9V4&type=video&part=contentDetails,snippet&id='+r[1];

    axios.get(videoUrl)
    .then(response => {
        console.log(response.data.items[0]);
        var datos = response.data.items[0];
         video.insertOne({ url:url , code:r[1], datos:datos});

    })
    .catch(error => {
        console.error('Error al obtener datos:', error);
    });

    console.log('datos');
    console.log(datos);


};


const update = async (url, id)=> {

    const video = mongodb.collection('video');

    await video.updateOne(
        {_id: new ObjectId(id)},
        { $set: { 'url': url} }
      );

    return getProjectById(id) 
};

const del = async (id)=> {
    
    const video = mongodb.collection('video');

    try {
        await video.deleteOne({_id: new ObjectId(id)});
    } catch (error) {
        return false;
    }

    return true;
};

async function obtenerDatos(url) {
    try {
        const response = await axios.get(url);
        console.log('Datos obtenidos:', response.data);
        return response.data;
        // Continúa con otras operaciones aquí
    } catch (error) {
        
        console.error('Error al obtener datos:', error);

        return false;
    }
    
}


module.exports = { 
    getAll, 
    getById,
    create,
    update,
    del,
};