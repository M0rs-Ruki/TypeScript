
import type { Request, Response } from 'express'
import User from '../models/userModels.js';


const comparePass = async (password: string, hashedPassword: string) => {
    try {
        if (password === hashedPassword) {
            return true;
        } else {
            return false;
        }
    } catch (error: any) {
        throw new Error(error);
    }
}

const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please fill all the fields' });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({name, email, password});
        await newUser.save();

        res.status(201).json({message: 'User created successfully'})



    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while registering the user." });
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "Please fill all the fields" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordValid = await comparePass(password, user.password)
        if (!isPasswordValid) {
            res.status(400).json({ message: "Invalid password" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

const logOut = async (req: Request, res: Response) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Logged out successfully" });

        res.redirect("/")
    } catch (error: any) {
        console.error("Logout error:", error);
        res.status(500).send("Error occurred during logout");
    }
}



export { register, login, logOut };