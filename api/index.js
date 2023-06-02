import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());


app.use("/api/posts", postRoutes);

// app.get("/test", (req, res) => {
//     res.json("It Works!");
// });


app.listen(8800, () => {
    console.log("Connected");
});



