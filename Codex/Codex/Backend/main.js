require('dotenv').config();
const express=require('express');
var cors = require('cors') 
const connectDb=require('./db/connect')
const taskRoute=require('./routes/tasks');
const app=express();

const port=5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1/task',taskRoute);


const start=async()=>{
    try {

        await connectDb(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Listening on port ${port}`)
        })
    } catch (error) {
        
    }
}
  
start(); 