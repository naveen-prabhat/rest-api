import express from "express";
import mongoose, { mongo } from "mongoose";
import { APP_PORT,DB_URL } from "./config";
import { errorHandler } from "./middlewares";
import routes from "./routes";
import cors from 'cors';
const app=express ();

app.use(cors())

//mongodb connection
mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('DB connected...');
});

//node to create routes
app.use(express.json());
app.use('/api',routes);


app.use(errorHandler);
app.listen(APP_PORT,()=>console.log(`Listening on port ${APP_PORT}`));