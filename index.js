// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import router from './Routers.js'
import { DataModel } from './Model.js';

// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));


app.get("/",(req,res)=>{
    res.send("sucess")
})
app.get("/get",async(req,res)=>{
    try{
        const datas = await DataModel.find();
        console.log('data',datas);
        res.status(200).json(datas);
    } catch (err) {
        console.log('error',err)
    }
})
app.post("/post",async(req,res)=>{
    try{
        const newdata = req.body
        const data = new DataModel(newdata)
        await data.save()
        res.status(200).json(newdata)
    } catch (err) {
        console.log('error',err)
    }
})
app.post("/update",async(req,res)=>{
    try{
        const updatedata = req.body
        const updatedt = await DataModel.findOneAndUpdate({path: updatedata.path},updatedata,{new:true})
        
        res.status(200).json(updatedata)
    } catch (err) {
        console.log('error',err)
    }
})



const URL = "mongodb+srv://trinhbk501:qlxNKVUkV0lUFDEw@cluster0.qohwqib.mongodb.net/?retryWrites=true&w=majority"
mongoose.set("strictQuery", false);
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database' + error);
  });

app.listen(process.env.PORT||3001,()=>{
    console.log("Sever runninginport 3001")
})
