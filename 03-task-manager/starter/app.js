require('./db/connect.js')
const express = require('express'); 
const app = express();
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect.js');
const { connect } = require('mongoose');
require('dotenv').config();
//middleware
app.use(express.json());


//routes
app.use('/api/v1/tasks',tasks)

const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
    } catch (error) {
        console.log(error); 
    }
}
start();
app.listen(port, console.log('Server is listening on port 3000'))