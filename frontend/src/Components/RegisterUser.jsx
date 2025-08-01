import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // ✅ Import it
function RegisterUser() {
    const navigate = useNavigate(); // ✅ Initialize
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/register`, formData);
      sessionStorage.setItem('isLoggedIn', 'true');
      setMessage('Register successful! Redirecting...✅✅');
      navigate("/explore");
      console.log('Register successful:', res.data);
      // Get the full user data from response
      const user = res.data.user;
      // Store useful info in sessionStorage
     sessionStorage.setItem("isLoggedIn", "true");//very important for authentication
     sessionStorage.setItem("userEmail", user?.email); // optional
     sessionStorage.setItem("userName", user?.name); // ✅ Save from backend
     sessionStorage.setItem("userId", user?._id); // optional


    } catch (err) {
      console.error('Registration failed:', err);
      if (err.response && err.response.data) {
        setMessage(err.response.data.message || 'Registration failed. Please try again.');
      } else {
        setMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/Hero.png"
        alt="Register Background"
        className="absolute inset-0 w-full h-full bg-blur  object-cover z-0"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-70 z-10" />
      {/* Centered Login Card */}
      <div  className="relative z-20 bg-[#ffffff93] bg-opacity-95 p-10 border-amber-50 border-1 shadow-2xl rounded-lg hover:shadow-amber-50 w-full max-w-md flex flex-col items-center">
      <img src="/images/logo.png" alt="Logo" className="h-14 mb-4" />
      <form
        onSubmit={handleSubmit}
      >
      
        <h2 className="text-3xl font-extrabold mb-6 text-center roboto-condensed tracking-tight text-gray-900">Register</h2>
        {message && <p className="text-center text-sm mb-4 text-red-600 font-semibold">{message}</p>}
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-[#c90000] text-white font-bold text-lg py-3 rounded transition duration-300 shadow-md mb-2"
        >
          Register
        </button>
      </form>
      <p>Have an account?<Link to="/login" className=" text-[#262626] hover:text-red-700 text-lg font-semibold "> Login</Link></p>
      </div>
    </div>
  );
}

export default RegisterUser;