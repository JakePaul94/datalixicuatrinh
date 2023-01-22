import mongoose from "mongoose";
import express from 'express'
const router = express.Router();

router.get("/2",(req,res)=>{
    res.send("2sucess")
})
export default router