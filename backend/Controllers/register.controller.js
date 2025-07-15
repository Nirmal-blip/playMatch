import User from '../Models/user.model.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    
  try{

      // Check if user already exists
      const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }


        // Hash the password(using bcryptjs)

        const salt = await bcrypt.genSalt(10); // 10 rounds
        const hashedPassword = await bcrypt.hash(password, salt);

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