import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import img from "../assets/images/frame 6.jpg"; // ✅ Ensure correct path

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const isOtpComplete = otp.every((digit) => digit !== ""); // ✅ Check if all boxes are filled

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (index < 5 && value) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOtpComplete) {
      const otpValue = otp.join("");
      console.log("OTP Verified: ", otpValue);
      navigate("/dashboard");
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(30);
    console.log("OTP Resent");
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-white">
        <img
          src={img}
          alt="Welcome"
          className="w-3/4 rounded-lg shadow-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/400";
          }}
        />
      </div>

      {/* Right Side - OTP Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 bg-white">
        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
        <p className="text-sm text-gray-600">Login and verify your OTP</p>

        {/* OTP Boxes */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-xs">
          <div className="flex justify-center space-x-2 mt-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength="1"
                className="w-14 h-12 text-center border border-gray-300 rounded-md text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-[#00A7AC] transition-all"
              />
            ))}
          </div>

          {/* Timer (Left) & Resend OTP (Right) Always Visible */}
          <div className="w-full flex justify-between mt-4 text-sm">
            <p className="text-gray-600">{timer}s</p>
            <button
              onClick={handleResend}
              className="text-[#00A7AC] font-semibold hover:underline"
            >
              Resend OTP
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isOtpComplete} // ✅ Button remains disabled until all OTP digits are entered
            className={`w-93 mt-4 p-3 rounded-md font-semibold transition duration-300 ${
              isOtpComplete
                ? "bg-[#00A7AC] text-white hover:bg-[#008A8F]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Verify OTP
          </button>
        </form>

        {/* Google Login Button */}
        <button className="w-93 mt-4 p-3 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-200 transition duration-300">
          <FcGoogle className="text-2xl mr-2" />
          Login with Google
        </button>

        {/* Sign Up Text Link */}
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#00A7AC] font-semibold hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Otp;
