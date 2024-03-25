const {Router} = require('express');

const videoController = require("../../controllers/videoController");

const router = Router();

router.get('/', videoController.getAllVideos)

router.get('/:id', videoController.getVideoById)

router.patch('/:id', videoController.updateVideo)

router.post('/', videoController.createVideo)

router.delete('/:id', videoController.deleteVideo)

module.exports = router;

