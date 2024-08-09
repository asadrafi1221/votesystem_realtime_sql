import { signup,displaysignup } from "../controllers/signup_controller.js";
import { Router } from "express";

const signup_router = Router();
signup_router.post('/signup',signup)
.get('/signup',displaysignup);

export default signup_router;
