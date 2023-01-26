const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors(), express.json());

const connectDb = require('./config/mongoose.config');
connectDb();

const authorRouter = require('../server/routes/author.routes');
app.use('/api', authorRouter);

const port = 5001;
app.listen(port, () => console.log(`Listening on port: ${port}`));