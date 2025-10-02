
import type { Request, Response } from 'express'
import User from '../models/userModels.js'

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