import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ellipseImage from "../assets/images/Ellipse 34.jpg";
import vectorImage from "../assets/images/Vector 60.jpg";

const Step6 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedPlan = location.state?.selectedPlan || { title: "No Plan Selected" };
    const selectedQualification = location.state?.selectedQualification || "Not Provided";
    const previousPercentage = location.state?.percentage || "";
    const previousCgpa = location.state?.cgpa || "";

    const [percentage, setPercentage] = useState(previousPercentage);
    const [cgpa, setCgpa] = useState(previousCgpa);
    const [stream, setStream] = useState("");

    const handleBack = () => {
        navigate("/step5", { state: { selectedPlan, selectedQualification, percentage, cgpa } });
    };

    const handleNext = () => {
        if (!stream) {
            alert("Please select a stream before proceeding.");
            return;
        }
        if (!percentage || isNaN(percentage) || percentage < 0 || percentage > 100) {
            alert("Please enter a valid percentage between 0 and 100.");
            return;
        }
        navigate("/step7", { state: { selectedPlan, selectedQualification, percentage, cgpa, stream } });
    };

    return (
        <div className="relative">
            <h1 className="text-2xl font-bold text-[#05445E] p-4">NGHR</h1>

            <div
                className="relative flex flex-row items-center justify-between min-h-[calc(100vh-1in)] w-full bg-cover bg-no-repeat px-10"
                style={{ 
                    backgroundImage: `url(${vectorImage})`, 
                    backgroundPosition: "100% center", 
                    backgroundSize: "50%" 
                }}
            >
                {/* Left Side Background */}
                <div
                    className="absolute left-0 top-0 w-1/2 h-full bg-contain bg-no-repeat"
                    style={{ 
                        backgroundImage: `url(${ellipseImage})`,
                        backgroundSize: "cover", 
                        backgroundPosition: "left center"
                    }}
                ></div>

                {/* Center Content */}
                <div className="relative z-10 w-80 max-w-xl text-left ml-20">
                    <p className="text-3xl font-semibold text-[#05445E] mb-4">Step 4 out of 5</p>
                    <p className="text-2xl mt-9 text-[#05445E] font-bold mb-4">
                        Fill in the Details to help us build your profile and land perfect job opportunities.
                    </p>

                    {/* Stream Selection */}
                    <div className="text-left">
                        <p className="text-xl mt-8 font-bold text-[#05445E] mb-2">Select Stream</p>
                        <div className="flex gap-4">
                            {["Science", "Commerce", "Arts"].map((option) => (
                                <button
                                    key={option}
                                    className={`px-4 py-2 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        stream === option ? "bg-[#05445E] text-white" : "bg-white text-gray-700 border-gray-300"
                                    }`}
                                    onClick={() => setStream(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Percentage Input */}
                    <div className="text-left mt-6">
                        <p className="text-md mt-4 text-[#05445E] font-bold">
                            Add Class XII Percentage <span className="text-red-700">*</span>
                        </p>
                        <input
                            type="number"
                            value={percentage}
                            onChange={(e) => setPercentage(e.target.value)}
                            className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-[#00A7AC]"
                            placeholder="Percentage Scored / CGPA"
                        />
                    </div>

                    {/* Back & Next Buttons */}
                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={handleBack}
                            className="w-[45%] py-3 bg-gray-400 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                        >
                            Back
                        </button>

                        <button
                            onClick={handleNext}
                            className="w-[45%] py-3 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                            style={{ background: "linear-gradient(90deg, #05445E 0%, #00A7AC 100%)" }}
                        >
                            Next
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Step6;
