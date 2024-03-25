const videoService = require("../services/videoService");


const getAllVideos = async (req, res)=>{
    console.log('projects v1 ');

    const allVideos = await videoService.getAllVideos();
    res.send({ status: "OK", data: allVideos });
}

const getVideoById = async (req, res)=>{
    console.log(req.params);

    const id = req.params.id;
    if(!id){
        return;
    }
    const video =await videoService.getVideoById(id);
    if(video.length===0){
        res.send({ status: "ERROR", data: 'video no found' });
    }
    res.send({ status: "OK", data: project });
}

const createVideo = async (req, res)=>{
    const { body } = req;

    console.log(body.url);

    const video =await videoService.createVideo(body.url);

    if(video){
        res.send({ status: "ERROR", data: 'data incomplete' });
    }
    res.send({ status: "OK", data: video });
}

const updateVideo = async (req, res)=>{
    console.log(req.params.id);

    const { body } = req;
    const id = req.params.id;

    const video =await videoService.updateVideo(body.url, id);

    if(video.length===0){
        res.send({ status: "ERROR", data: 'data incomplete' });
    }
    res.send({ status: "OK", data: video });
}

const deleteVideo = async (req, res)=>{
    const id = req.params.id;
    if(!id){
        return;
    }
    const video =await videoService.deleteVideo(id);
    if(!video){
        res.send({ status: "ERROR", data: 'video no found' });
    }
    res.send({ status: "OK", data: 'video delete correctly.' });
}

module.exports = {
    getAllVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo,
};