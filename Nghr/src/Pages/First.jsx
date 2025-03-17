import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";

import img1 from "../assets/images/Ellipse171.jpg";
import img2 from "../assets/images/image.jpg";
import img3 from "../assets/images/image(1).jpg";
import img4 from "../assets/images/image 16.jpg";
import img5 from "../assets/images/image (2).jpg";
import img6 from "../assets/images/image (3).jpg";
import img7 from "../assets/images/img.jpg";

const First = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      navigate("/welcome", { state: { selectedOption } }); // Navigate to Welcome.jsx
    } else {
      alert("Please select an option before continuing.");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 font-Poppins text-[#05445E]">
      <div className="w-[589px] h-[692px] bg-white shadow-lg rounded-lg flex flex-col items-center relative p-6">
        <h1 className="text-2xl font-bold mt-4 mb-2">NGHR</h1>

        <p className="text-sm text-center mt-10">
          Join over 50,000 satisfied job seekers and <br /> companies who are already on NGHR
        </p>

        {[
          { id: "option1", text: "I'm looking for a remote job", images: [img1, img2, img3], description: "Get matched with remote jobs for free." },
          { id: "option2", text: "I'm hiring candidates", images: [img4, img5, img6], description: "Connect with top talent." },
          { id: "option3", text: "Connecting top candidates to companies remotely", images: [img7], description: "Get matched with jobs through a consultant." },
        ].map((option) => (
          <div
            key={option.id}
            className={`w-[392px] h-[88px] mt-6 rounded-md border flex items-center justify-between px-4 cursor-pointer transition-all ${
              selectedOption === option.id ? "border-4 border-[#1f5c76] bg-white" : "border-gray-300"
            }`}
            onClick={() => handleSelect(option.id)}
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center relative">
                {option.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={classNames(
                      "rounded-full border-2 border-white relative",
                      idx === 1 ? "-mx-2" : "",
                      idx === 0 ? "z-10" : "",
                      idx === 1 ? "z-20" : "",
                      idx === 2 ? "z-10" : ""
                    )}
                  >
                    <img
                      src={img}
                      alt={`Profile ${idx + 1}`}
                      className={classNames("rounded-full object-cover", option.id === "option3" ? "w-16 h-16" : idx === 1 ? "w-7 h-7" : "w-6 h-6")}
                    />
                  </div>
                ))}
              </div>
              <div className="text-l">
                <span className="text-sm font-semibold">{option.text}</span>
                <p className="text-xs mt-1">{option.description}</p>
              </div>
            </div>

            <input
              type="radio"
              name="option"
              className="w-[15px] h-[15px] rounded-full ml-4 accent-[#1f5c76]"
              checked={selectedOption === option.id}
              readOnly
            />
          </div>
        ))}

        <button
          className="w-[392px] h-[40px] mt-9 rounded-md bg-gradient-to-r from-[#05445E] to-[#00A7AC] text-white font-bold text-lg border-none cursor-pointer transition-all hover:opacity-90"
          onClick={handleContinue}
        >
          Continue
        </button>

        <p className="mt-3 text-sm font-semibold cursor-pointer">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default First;
