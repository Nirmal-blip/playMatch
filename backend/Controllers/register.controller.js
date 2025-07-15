import User from '../Models/user.model.js';



export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    
  try{

      // Check if user already exists
      const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Create new user
        const newUser= new User({
            name,
            email,
            password
        })
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully',user: newUser });

  }
  catch(error){
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
    
}