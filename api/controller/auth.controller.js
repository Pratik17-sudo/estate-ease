import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const register = async (req, res) => {
    try {
        console.log("Request received:", req.body);

        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log("Hashed Password:", hashedPassword);

        // Create a new user in the database
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        console.log("New User Created:", newUser);

        return res.status(201).json({ message: "User registered successfully", user: newUser });

    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};




export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists
        const user = await prisma.user.findUnique({
            where: { username }
        });

        if (!user) return res.status(401).json({ message: "Invalid Credentials" });

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Invalid Credentials" });
        
        // console.log("JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);


        // Generate JWT token
        const age = 1000 * 60 * 24 * 7;
        const token = jwt.sign(
            { id: user.id, isAdmin: false },
            process.env.JWT_SECRET_KEY, 
            { expiresIn: age }
        );

        const { password:userPassword, ...userInfo}=user;

        // Set cookie and respond
        res.cookie("token", token, {  
            httpOnly: true,
            maxAge: age,
        }).status(200).json(userInfo);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to login!" });
    }
};





export const logout  = (req,res)=>{

    res.clearCookie("token").status(200).json({message:"Logout Sucessfull"})

}