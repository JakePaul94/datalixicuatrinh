import mongoose from "mongoose";

const Schema = new mongoose.Schema(
    {
        isopen:{
            type: Boolean,
            required:true
        },
        path:{
            type: String,
            required:true 
        },
        tennganhang:{
            type: String,
            required:true ,
        },
        sotaikhoan:{
            type: String,
            required:true 
        },
        sotiennhan:{
            type: String,
            required:true 
        },
    },{timestamps:true}
)
export const DataModel = mongoose.model("Data",Schema)