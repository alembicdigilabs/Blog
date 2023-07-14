import express from 'express';
import {getPost, getPosts, addPost, deletePost, updatePost } from '../controllers/post.js';

const router = express.Router();

// router.get("/test", (req, res)=>{
//     res.json("this is post");
// });
// **** OR Instead of writing opertations here we seperated app login in controllers ****
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.post("/delete", deletePost);
router.put("/update", updatePost);


export default router;
 