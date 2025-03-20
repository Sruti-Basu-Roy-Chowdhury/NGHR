import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ellipseImage from "../assets/images/Ellipse 34.jpg";
import vectorImage from "../assets/images/Vector 60.jpg";
import "@fontsource/poppins";
import "@fontsource/inter";


const Step7 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedPlan = location.state?.selectedPlan || { title: "No Plan Selected" };
    const selectedQualification = location.state?.selectedQualification || "Not Provided";
    const previousPercentage = location.state?.percentage || "";
    const previousCgpa = location.state?.cgpa || "";

    const [percentage, setPercentage] = useState(previousPercentage);
    const [stream, setStream] = useState("");

    const handleBack = () => {
        navigate("/step5", { state: { selectedPlan, selectedQualification, percentage, cgpa: previousCgpa } });
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
        navigate("/step8", { state: { selectedPlan, selectedQualification, percentage, cgpa: previousCgpa, stream } });
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
                        Fill in the details to help us build your profile and land perfect job opportunities.
                    </p>
                    <p className="font-bold text-[#05445E]">Fill up Educational details</p>

                    {/* Stream Selection */}
                    <div className="text-left">
                        <p className="text-sm mt-8 text-[#05445E] mb-2">
                            Specialization in Graduation / Diploma<span className="text-red-800"> *</span>
                        </p>

                        {/* Stream Input */}
                        <div className="text-left mt-4">
                            <input
                                type="text"
                                value={stream}
                                onChange={(e) => setStream(e.target.value)}
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none bg-white"
                                placeholder="E.g. B.Tech"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-9 mt-6">
                            {["B.A", "BCA", "B-Tech/B.E.", "B.Com", "B.Ed", "B.Pharma", "LLB", "Diploma"].map((option) => (
                                <button
                                    key={option}
                                    className={`min-w-[100px] h-10 text-center rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 ${
                                        stream === option ? "bg-[#05445E] text-white" : "bg-white text-[#00A7AC] border-gray-300"
                                    }`}
                                    onClick={() => setStream(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>


         

                    </div>

                    {/* Back & Next Buttons */}
                    <div className="mt-6 flex justify-between">
                        
                    <button
    onClick={handleNext}
    className="w-full py-3 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
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

export default Step7;
