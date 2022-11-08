import { User } from "../../models";
import { CustomErrorHandler } from "../../services";


const adminController={
    async root(req,res,next){
        try{
            const user=await User.find();
            if(!user){
                return next(CustomErrorHandler.unAuthorised());
            }
            res.json(user);
        }catch (err){
            return next(err); 
        }
    }
}

export default adminController;