import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { id, name, email, password, phone_number, address } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await User.create({ id, name, email, password: hashedPassword, phone_number, address });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
