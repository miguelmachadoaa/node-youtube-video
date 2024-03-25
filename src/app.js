const express = require('express');
const V1projectsRoutes = require('./v1/routes/projectsRoutes');
const V1videosRoutes = require('./v1/routes/videoRoutes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3302;

app.use('/api/v1/projects', V1projectsRoutes);
app.use('/api/v1/videos', V1videosRoutes);


app.listen(PORT, ()=> {
    console.log('ejecutando aplicacion en puerto '+PORT);
})