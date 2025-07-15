import User from '../Models/user.model.js';


//checking if the user is logged in

export const loginUser= async (req, res) => {

    console.log("Login route hit ✅"); // ✅ This logs when user hits POST /login

    const {email, password} = req.body;
    try {
        const existingUser = await User.findOne({ email, password });
    
        if (existingUser) {
          return res.status(200).json({ message: "User exists ✅", user: existingUser });
        } else {
          return res.status(404).json({ message: "User not found ❌" });
        }
      } catch (error) {
        console.error("Error checking user:", error);
        return res.status(500).json({ message: "Server error" });
      }
   
  
}