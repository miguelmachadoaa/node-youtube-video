const queries = require('../queries');
const mongodb = require('../mongoDbVideo');


const getAllVideos = async ()=>{
    console.log('videos v1 ');

    await mongodb.getAll();

    const allVideos = await mongodb.getAll();

    return allVideos;
}

const getVideoById = async (id)=>{
    const video = await mongodb.getById(id);
    return video;
}

const createVideo = async (url)=>{

    

    const video = await mongodb.create(url);
    return video;
}

const updateVideo = async (url, id)=>{

    const video = await mongodb.update(url, id);

    return video;
}

const deleteVideo = async (id)=>{

    const video = await mongodb.del(id);
    return video;
}
module.exports = {
    getAllVideos,
    getVideoById,
    createVideo, 
    updateVideo,
    deleteVideo
};