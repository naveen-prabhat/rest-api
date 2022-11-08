import express from "express";

const router=express.Router();
import { registerController,loginController,cartController, userController, refreshController,productController} from '../controllers';
import adminController from "../controllers/auth/adminController";
import auth from '../middlewares/auth'



//navigate to following endpoints to get the data
router.post('/register',registerController.register);
router.post('/login',loginController.login);
router.post('/cart',cartController.cart);
router.get('/me',auth,userController.me);
router.post('/refresh',refreshController.refresh);
router.post('/logout',auth,loginController.logout);
router.get('/admin',adminController.root)
router.post('/products',productController.store);

export default router;