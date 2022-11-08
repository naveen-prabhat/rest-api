import { User } from "../../models";
import { CustomErrorHandler } from "../../services";


const userController={
    async me(req,res,next){
        try{
            const user=await User.collection("users").find({});
            if(!user){
                return next(CustomErrorHandler.notFound());
            }
            res.json(user);
        }catch (err){
            return next(err); 
        }
    }
}

export default userController;