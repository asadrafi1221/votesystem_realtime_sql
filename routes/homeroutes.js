import { displayhomepage , handlevotes  ,getdata ,postmaxdata} from "../controllers/home_controller.js";
import {Router} from "express";
const router = Router();


router
.get('/home',displayhomepage)
.post('/create',handlevotes)
.get('/getdata',getdata)
.post('/getmax',postmaxdata)


export default router;