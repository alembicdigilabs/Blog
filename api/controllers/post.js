import { db } from "../db.js";


export const getPosts = (req, res) => {
    // res.json("from controller");
    const q = req.query.cat ? "SELECT * FROM posts WHERE category=?" 
                                : "SELECT * FROM posts";
    db.query(q, [req.query.cat], (err, data) => {
        if(err) return res.send(err);

        return res.status(200).json(data);
    });
};

export const getPost = (req, res) => {
    // const q = "SELECT p.*. u.username, u.email, u.img as userImage FROM users u JOIN posts p ON u.id = p.uid WHERE p.id=?";
    const q = "SELECT p.*, u.username, u.email, u.img as userImage FROM users u INNER JOIN posts p ON u.id=p.uid  WHERE p.id=?";
    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.send(err);

        return res.status(200).json(data[0]);
    });
}

export const addPost = (req, res) => {
     
}

export const deletePost = (req, res) => {
     
}

export const updatePost = (req, res) => {
     
}
 