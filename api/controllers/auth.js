import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(q, [req.body.email, req.body.username], (err, data) => {
      if (err) return res.json(err);
      if (data.length) return res.status(409).json("User already exists!");

      // Hash password and create user
      // const salt = bcrypt.genSaltSync(10);
      // const hash = bcrypt.hashSync(req.body.password, salt);

      const insertQuery = "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";
      const values = [req.body.username, req.body.email, req.body.password];
      db.query(insertQuery, values, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json("User has been created");
      });
    });
  };

export const login = (req, res) => {
    // Check User
    const q = "SELECT * FROM users WHERE email = ?";
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.json(err);
      if (data.length === 0) return res.status(404).json("Invalid details.");
  
      // const isPasswordCorrect = bcrypt.compareSync(req.body.password.toString(), data[0].password.toString());
      // if (isPasswordCorrect === false) return res.status(400).json("Wrong email or password");
      if (req.body.password.toString() != data[0].password.toString()) return res.status(400).json("Wrong email or password");

      const token = jwt.sign({ id: data[0].id }, "jwtkey"); // jwtkey is the secret key
      const { password, ...other } = data[0];

      return res.cookie("access_token", token, {
        httpOnly: true,
      }).status(200).json(other);
    });
  };


export const logout = (req, res) => {
    // res.json("from controller");
    res.clearCookie("access_token", {
      sameSite: "none",
      secure: true,

    }).status(200).json("User has been logged out.");
}