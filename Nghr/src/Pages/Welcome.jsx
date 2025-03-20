import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import img from "../assets/images/Frame 6.jpg";
import "@fontsource/poppins";
import "@fontsource/inter";

const Welcome = () => {
  const [phone, setPhone] = useState("");

  // Validate phone number (basic check for 10 digits)
  const isPhoneValid = phone.length === 10 && /^[0-9]+$/.test(phone);

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-white">
        <img src={img} alt="Welcome" className="w-3/4 rounded-lg shadow-lg" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 bg-white">
        <h2 className="text-4xl font-bold mb-4 text-[#000000] font-[poppins]">Welcome</h2>
        <p className="text-sm font-[poppins] text-[#7E8B9E]">Login and verify your OTP</p>

        {/* Phone Number Input */}
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} // Allow only numbers
          maxLength="10"
          className="w-100 p-3 m-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        {/* Send OTP Button - Disabled until valid phone number is entered */}
        <Link to={isPhoneValid ? "/otp" : "#"}>
          <button
            className={`w-100 mt-1 p-3 font-semibold font-[poppins] rounded-md ${
              isPhoneValid
                ? "bg-[#00A7AC] text-white hover:bg-[#008A8F]"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!isPhoneValid}
          >
            Send OTP
          </button>
        </Link>

        {/* Google Login Button */}
        <button className="w-100 mt-4 p-3 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-200">
          <FcGoogle className="text-2xl mr-2" />
          Login with Google
        </button>

        {/* Sign Up Text Link (Not a Button) */}
        <p className="mt-4 text-sm font-[poppins]">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#00A7AC] font-[poppins] font-semibold hover:underline">
            Sign up here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
