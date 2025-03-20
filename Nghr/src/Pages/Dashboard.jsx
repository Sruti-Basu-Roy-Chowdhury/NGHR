import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { motion } from "framer-motion";
import RightImage from "../assets/images/Vector 60.jpg"; 
import BackgroundImage from "../assets/images/Ellipse 34.jpg"; 


import "@fontsource/poppins";
import "@fontsource/inter";


const Dashboard = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate(); // React Router navigation function

  const handleVerify = () => {
    if (phone.trim()) {
      navigate("/PhoneVerify", { state: { phoneNumber: phone } }); // Navigate to OTP with phone number
    }
  };

  return (
    <div>
      <h1 className="  p-6 w-[1330px] h-[83px] text-2xl font-bold text-[#05445E] font-[poppins]">
        NGHR
      </h1>

       <div
              className="flex items-center min-h-screen justify-between px-16 font-poppins relative"
              style={{
                background: `radial-gradient(circle, rgba(123, 255, 222, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%), url(${BackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >

      <div
        className="flex min-h-screen items-start justify-between px-20 pt-20 font-poppins relative"
        style={{
          background: `radial-gradient(circle, rgba(123, 255, 222, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%), url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Left Side: Form */}
        <div className="w-full max-w-md ml-25">
          <h2 className="text-lg mt-2 font-[poppins] font-medium text-[20px] leading-[150%] tracking-[1%] text-[#05445E]">
            Step 1 out of 5
          </h2>
          <p className="text-[#05445E] mt-3 font-[poppins] font-medium text-[20px] leading-[150%] tracking-[1%]">
            Enter a few details to get started
          </p>
          <p className="mt-1 font-[poppins]  text-[14px] leading-[25px] tracking-[0.5%] align-middle text-[#05445E]">
            Fill in the details to create your account
          </p>

          <div className="mt-4 space-y-6">
            <div>
              <label className="block font-semibold text-[#05445E] font-[inter]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 border font-[inter]  rounded mt-1 bg-transparent text-gray-900"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#05445E] font-[inter] ">
                Email Id <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-112 p-3 border rounded font-[inter]  mt-1 bg-transparent text-gray-900"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#05445E] font-[inter] ">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 border font-[inter]  rounded mt-1 bg-transparent text-gray-900"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              disabled={!phone}
              onClick={handleVerify} // Navigate to OTP page
              className={`w-full mt-6 p-3 rounded font-[inter]  text-white font-semibold transition-all ${
                phone
                  ? "bg-gradient-to-r from-[#05445E] to-[#00A7AC] hover:opacity-90"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Verify Phone Number
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          className="md:block w-1/2 flex justify-center mt-[-30px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={RightImage}
            alt="Signup Illustration"
            className="w-full h-auto p-4"
          />
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
