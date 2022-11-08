import { Product } from "../models"
import multer from "multer";
import path from 'path';
import { CustomErrorHandler } from "../services";

const storage=multer.diskStorage({
    destination:(req,file,cb)=>cb(null,'uploads/'),
    filename:(req,file,cb)=>{
        const uniqueName=`${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

const handleMultipartData=multer({storage,limits:{fileSize:1000000*5}}).single('image');

const productController={
    async store(req,res,next){
        handleMultipartData(req,res,(err)=>{
            if(err){
            return next(CustomErrorHandler.serverError(err.message))
            }
            console.log(req);
            // const filePath=req.file.path;
            res.json({status:1});
        });
    }
}

export default productController;