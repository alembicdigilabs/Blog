import express from 'express';
import {addPost} from '../controllers/post.js';

const router = express.Router();

// router.get("/test", (req, res)=>{
//     res.json("this is post");
// });
// **** OR Instead of writing opertations here we seperated app login in controllers ****
router.get("/test", addPost);

export default router;
 