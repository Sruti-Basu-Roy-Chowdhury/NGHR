import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import RightImage from "../assets/images/Vector 60.jpg";
import BackgroundImage from "../assets/images/Ellipse 34.jpg";

const Otp2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || "********21"; // Default masked number

  // OTP State
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef(new Array(6).fill(null));

  // Timer State
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  // Resend OTP
  const handleResendOtp = () => {
    setTimer(30);
    setIsResendDisabled(true);
    setOtp(new Array(6).fill(""));
    inputRefs.current[0]?.focus();
    console.log("Resending OTP...");
  };

  // Handle OTP Input
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) return;

    let newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take last digit only
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle Backspace
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      let newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Verify OTP
  const handleVerifyOtp = () => {
    if (otp.join("").length === 6) {
      navigate("/Step3"); // Redirect to Adhaar page
    }
  };

  return (
    <div>
      <h1 className="p-6 text-2xl font-bold text-[#05445E]">NGHR</h1>

      <div
        className="flex items-center min-h-screen justify-between px-16 font-poppins relative"
        style={{
          background: `radial-gradient(circle, rgba(123, 255, 222, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%), url(${BackgroundImage})`,
          backgroundSize: "50% 100%", // Covers left half
          backgroundPosition: "left top", // Positioned to the left
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Blurred Middle Section */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-full bg-white/50 backdrop-blur-md"
          style={{
            filter: "blur(10px)", // Apply blur
            WebkitFilter: "blur(10px)", // Safari support
          }}
        ></div>

        {/* Left Side: OTP Form */}
        <div className="w-1/2 flex flex-col justify-center items-start pl-20 relative z-10">
          <h1 className="text-2xl text-[#05445E] font-semibold">Step 1 out of 5</h1>
          <h2 className="text-2xl font-semibold text-[#05445E] mt-2">
            Enter 6-digit NGHR OTP sent to <strong>{phoneNumber}</strong>
          </h2>

          {/* OTP Input Fields */}
          <div className="mt-6">
            <label className="text-lg font-medium text-[#05445E] mb-2 block">Enter OTP</label>
            <div className="flex space-x-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  maxLength={1}
                  className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:border-[#05445E] focus:ring-2 focus:ring-[#00A7AC] outline-none transition-all bg-transparent"
                />
              ))}
            </div>
          </div>

          {/* Timer & Resend OTP */}
          <div className="flex items-center justify-between w-full mt-4">
            <span className="text-gray-600 text-lg">
              <span className="text-[#05445E] font-bold">{timer}s</span>
            </span>

            <button
              onClick={handleResendOtp}
              disabled={isResendDisabled}
              className={`text-[#05445E] font-semibold px-4 py-2 transition-all ${
                isResendDisabled ? "opacity-50 cursor-not-allowed" : "hover:underline"
              }`}
            >
              Resend OTP
            </button>
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerifyOtp}
            disabled={otp.join("").length !== 6}
            className={`w-90 mt-6 p-3 rounded text-white font-semibold transition-all ${
              otp.join("").length === 6
                ? "bg-gradient-to-r from-[#05445E] to-[#00A7AC] hover:opacity-90"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Proceed
          </button>
        </div>

        {/* Right Side: Image */}
        <motion.div
          className="w-1/2 flex justify-center bg-white relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={RightImage} alt="OTP Verification" className="w-[80%] h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Otp2;
