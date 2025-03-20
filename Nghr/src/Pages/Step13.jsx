import React from "react";
import { useNavigate } from "react-router-dom";
import ellipseImage from "../assets/images/Ellipse 34.jpg";
import vectorImage from "../assets/images/Vector 60.jpg";
import cardImage from "../assets/images/image 55.png";
import "@fontsource/poppins";
import "@fontsource/inter";


const Step13 = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/Step14");
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="text-2xl font-bold text-[#05445E] p-4">NGHR</header>

      {/* Main Content */}
      <div
        className="relative flex flex-grow items-center justify-start px-10 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${vectorImage})`,
          backgroundPosition: "right center",
          backgroundSize: "50%",
        }}
      >
        {/* Left Background Image */}
        <div
          className="absolute left-0 top-0 w-1/2 h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${ellipseImage})` }}
        ></div>

        {/* Card Section */}
        <div className="relative z-10 max-w-2xl text-left ml-20">
          <div className="w-120 shadow-xl rounded-2xl overflow-hidden bg-white p-6 flex flex-col items-center">
            {cardImage ? (
              <img
                src={cardImage}
                alt="Card Visual"
                className="w-full h-auto rounded-lg mb-6"
              />
            ) : (
              <p className="text-center text-gray-500">Image not found</p>
            )}
            <p className="text-center font-bold text-2xl text-[#2A2960] mb-3">
              Congratulations!
            </p>
            <p className="text-center text-[#000000] mb-5">
              You have successfully created your account
            </p>
            <div className="w-full flex justify-center">
              <button
                onClick={handleContinue}
                className="w-1/2 bg-gradient-to-r from-[#004446] to-[#00A7AC] text-white rounded-lg py-3 text-lg hover:opacity-90 transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step13;
