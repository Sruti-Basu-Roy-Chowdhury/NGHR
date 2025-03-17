import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload } from "lucide-react"; // Importing upload icon
import RightImage from "../assets/images/Vector 60.jpg";
import BackgroundImage from "../assets/images/Ellipse 34.jpg";

const Adhaar = () => {
  const navigate = useNavigate();

  // State for Aadhaar & PAN details
  const [aadhaarFront, setAadhaarFront] = useState(null);
  const [aadhaarBack, setAadhaarBack] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");

  // Check if all images are uploaded
  const allImagesUploaded = aadhaarFront && aadhaarBack && panCard;

  const handleFileChange = (event, setFile) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleVerify = () => {
    if (allImagesUploaded && aadhaarNumber.length === 12 && panNumber.length === 10) {
      navigate("/Verify");
    } else {
      alert("Please provide valid Aadhaar & PAN details along with document uploads.");
    }
  };

  return (
    <div>
      <h1 className="p-3 text-2xl font-bold text-[#05445E]">NGHR</h1>

      <div
        className="flex items-center min-h-screen justify-between px-15 font-poppins relative"
        style={{
          background: `radial-gradient(circle, rgba(123, 255, 222, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%), url(${BackgroundImage})`,
          backgroundSize: "50% 100%",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Left Side: Form */}
        <div className="w-1/2 p-12 flex flex-col justify-center items-start pl-15 relative z-10">
          <h1 className="text-2xl text-[#05445E] font-semibold">Step 2 out of 5</h1>
          <h2 className="text-2xl font-semibold text-[#05445E] mt-2">Secure Your Data with Our Easy KYC Process</h2>

          {/* Aadhaar Card Front Upload */}
          <div className="mt-6">
            <label className="text-lg font-medium text-[#05445E] mb-2 block">Upload Aadhaar Card Front</label>
            <div className="relative flex items-center border border-gray-300 rounded-md p-5">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setAadhaarFront)}
                className="absolute opacity-0 w-full h-full cursor-pointer"
              />
              <Upload className="text-[#05445E] mr-2" size={20} />
              <span className="text-gray-500">{aadhaarFront ? aadhaarFront.name : "Choose File"}</span>
            </div>
          </div>

          {/* Aadhaar Card Back Upload */}
          <div className="mt-6">
            <label className="text-lg font-medium text-[#05445E] mb-2 block">Upload Aadhaar Card Back</label>
            <div className="relative flex items-center border border-gray-300 rounded-md p-5">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setAadhaarBack)}
                className="absolute opacity-0 w-full h-full cursor-pointer"
              />
              <Upload className="text-[#05445E] mr-2" size={20} />
              <span className="text-gray-500">{aadhaarBack ? aadhaarBack.name : "Choose File"}</span>
            </div>
          </div>

          {allImagesUploaded && (
            <>
              <div className="mt-4">
                <label className="text-lg font-medium text-[#05445E] mb-2 block">Aadhar Card number</label>
                <input
                  type="text"
                  maxLength="12"
                  value={aadhaarNumber}
                  onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, ""))}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A7AC]"
                  placeholder="652141432142"
                />
              </div>
              </>
              )}

          {/* PAN Card Upload */}
          <div className="mt-6">
            <label className="text-lg font-medium text-[#05445E] mb-4 block">Upload PAN Card</label>
            <div className="relative flex items-center border border-gray-300 rounded-md p-5 ">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setPanCard)}
                className="absolute opacity-0 w-full h-full cursor-pointer"
              />
              <Upload className="text-[#05445E] mr-15" size={20} />
              <span className="text-gray-500">{panCard ? panCard.name : "Choose File"}</span>
            </div>
          </div>

          
          {allImagesUploaded && (
            <>

              <div className="mt-4">
                <label className="text-lg font-medium text-[#05445E] mb-2 block">PAN Card number</label>
                <input
                  type="text"
                  maxLength="10"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A7AC]"
                  placeholder="CBG2031429"
                />
              </div>
              </>
          )}
            
          

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={!allImagesUploaded || aadhaarNumber.length !== 12 || panNumber.length !== 10}
            className={`w-90 mt-6 p-3 rounded text-white font-semibold transition-all ${
              allImagesUploaded && aadhaarNumber.length === 12 && panNumber.length === 10
                ? "bg-gradient-to-r from-[#05445E] to-[#00A7AC] hover:opacity-90"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adhaar;