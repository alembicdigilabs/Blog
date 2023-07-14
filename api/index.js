import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";

import bcrypt from "bcryptjs" 

const app = express(); 



app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.get("/test", (req, res) => {
    // res.json("It Works!");
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync("plain_pwd", salt);   
    // const isPasswordCorrect = bcrypt.compareSync("plain_pwd", hash);
    // const isPasswordCorrect = bcrypt.compareSync("123", "$2a$10$CG3WXFXqfyqAOF.VyL/KaemQvwj0er/KETvWZn2xOujuBB.XGAHOS");
    // console.log(md5('message'));
    //    res.json("It Works!"+ epwd); 
    var phash = "";
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("123", salt, function(err, hash) {
            // Store hash in your password DB.
            phash = hash;
            console.log("It Works!"+ hash); 

        });
    });

    // Load hash from your password DB.
    bcrypt.compare("123", phash, function(err, res) {
        // res === true
       console.log("It Works!2"+ res); 

    });
});



app.listen(8800, () => {
    console.log("Connected");
});



