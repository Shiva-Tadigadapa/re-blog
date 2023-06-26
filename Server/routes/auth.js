import express from "express";
import { signin, signup,profile, getFollowing,followRequest, CheckRe, googleAuth } from "../controllers/auth.js";
import {} from "../controllers/user.js";

const router = express.Router();

router.get("/", CheckRe); 
//create a user
router.post("/signup",signup);


//Login a user
router.post("/signin",signin);

router.get("/profile", profile);
// router.get("/checkAuth",CheckAuth)

//Google Auth
router.post("/followRequest/:followId/:followerId",followRequest)
router.get("/getFollowing/:authorId/:UserId/getfollow",getFollowing)
router.post("/google",googleAuth)
export default router;