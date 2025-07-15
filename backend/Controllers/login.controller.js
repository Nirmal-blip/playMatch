import User from '../Models/user.model.js';
import bcrypt from 'bcryptjs';
import { comparePassword } from '../Methods/bcryptPassword.js';
//checking if the user is logged in

export const loginUser = async (req, res) => {

  console.log("Login route hit ✅"); // ✅ This logs when user hits POST /login

  const { email, password } = req.body;
  try {
        // 1. Find user by email
    const existingUser = await User.findOne({ email });

     
    if (!existingUser) {
      return res.status(404).json({ message: "User not found ❌" });
    }


      // 2. Compare entered password with stored hash  using methods defined by me (....smjh bhai easy hai....)
    const isMatch = await comparePassword(password, existingUser.password);
    console.log("Password match status:", isMatch); // ✅ Log to check password comparison
    
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

        // 3. Send success response
    return res.status(200).json({ message: "User exists ✅", user: existingUser });

  }
  catch (error) {
    console.error("Error checking user:", error);
    return res.status(500).json({ message: "Server error" });
  }


}