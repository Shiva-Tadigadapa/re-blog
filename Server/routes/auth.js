import express from "express";
import { signin, signup } from "../controllers/auth.js";
import {} from "../controllers/user.js";

const router = express.Router();
//create a user
router.post("/signup",signup);


//Login a user
router.post("/signin",signin);

//Google Auth
router.post("/google",)
export default router;