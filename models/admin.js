import mongoose from "mongoose";
const Schema=mongoose.Schema;

const adminSchema=new Schema({
    name:{type:String,required:true}  

},{timestamps:true});

export default mongoose.model('Admin',userSchema,'admins')