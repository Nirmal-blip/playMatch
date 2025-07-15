import User from '../Models/user.model.js';
import bcrypt from 'bcryptjs';
import { hashPassword } from '../Methods/bcryptPassword.js';

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    
  try{

      // Check if user already exists
      const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }


        // Hash the password(using function i defined in methods nirmal ...easy )
      const hashedPassword = await hashPassword(password);
    
        if (!hashedPassword) {
            return res.status(500).json({ message: 'Error hashing password' });
        }

        
        // Create new user
        const newUser= new User({
            name,
            email,
            password:hashedPassword
        })
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully',user: newUser });

  }
  catch(error){
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
    
}