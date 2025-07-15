// import otpGenerator from "otp-generator";
// import twilio from "twilio";
// import dotenv from "dotenv";

// dotenv.config(); // load env variables

// // 🔐 Twilio client setup
// const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// // 📦 Temporary OTP store (for demo)
// const otpStore = {};

// export const sendOtp = async (req, res) => {
//   const { phone } = req.body;

//   // ✅ Validate 10-digit Indian phone number
//   if (!/^[6-9]\d{9}$/.test(phone)) {
//     return res.status(400).json({ message: "Invalid phone number" });
//   }

//   // 🔢 Generate 6-digit OTP
//   const otp = otpGenerator.generate(6, {
//     digits: true,
//     alphabets: false,
//     upperCase: false,
//     specialChars: false
//   });

//   // 🕒 Store OTP temporarily with expiry
//   otpStore[phone] = {
//     otp,
//     expiresAt: Date.now() + 5 * 60 * 1000 // 5 minutes expiry
//   };

//   try {
//     // 📤 Send OTP via SMS
//     await client.messages.create({
//       body: `Your OTP is: ${otp}`,
//       from: process.env.TWILIO_PHONE,
//       to: `+91${phone}` // assuming Indian numbers
//     });

//     res.json({ message: "OTP sent successfully ✅" });
//   } catch (error) {
//     console.error("❌ Error sending OTP:", error);
//     res.status(500).json({ message: "Failed to send OTP" });
//   }
// };
