import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
    // var tmp = (localStorage.getItem("user")) ? localStorage.getItem("user") : null;
    //   tmp = (localStorage.getItem("user") == undefined) ? null : localStorage.getItem("user");

    const [ currentUser, setCurrentUser ] = useState(
            JSON.parse(localStorage.getItem("user")) || null
        ); // sets localsorage value into CurrentUser
    // there is no user then its going to be null

    const login = async (data) => {
        // const res = await axios.post("/auth/login", inputs);
        setCurrentUser(data);
    };

    const logout = async (inputs) => {
        const res = await axios.post("/auth/logout");
        setCurrentUser(null);
    };

    useEffect(() => {
        // var tmp1 = (currentUser) ? currentUser : null;
        console.log(currentUser);
        // localStorage.setItem("user", JSON.stringify(tmp1));
        localStorage.setItem("user", JSON.stringify(currentUser));

    }, [currentUser]);

    return <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
    
}