import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ellipseImage from "../assets/images/Ellipse 34.jpg";
import vectorImage from "../assets/images/Vector 60.jpg";
import "@fontsource/poppins";
import "@fontsource/inter";

const Step4 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedPlan = location.state?.selectedPlan || { title: "No Plan Selected" };

    const qualifications = [
        "Doctorate/PhD",
        "Masters/Post-Graduation",
        "Graduation/Diploma",
        "12th",
        "10th",
        "Below 10th"
    ];

    const [selectedQualification, setSelectedQualification] = useState(null);

    const handleSelectQualification = (qualification) => {
        setSelectedQualification(qualification);
    };

    const handleNext = () => {
        if (selectedQualification) {
            navigate("/step5", { state: { selectedPlan, selectedQualification } });
        } else {
            alert("Please select your highest qualification before proceeding.");
        }
    };

    return (
        <div className="relative">
            <h1 className="text-2xl font-bold text-[#05445E] p-4 font-[poppins] ">NGHR</h1>

            <div
                className="relative flex flex-row items-center justify-between min-h-[calc(100vh-1in)] w-full bg-cover bg-no-repeat px-10"
                style={{ 
                    backgroundImage: `url(${vectorImage})`, 
                    backgroundPosition: "100% center", 
                    backgroundSize: "50%" 
                }}
            >
                <div
                    className="absolute left-0 top-0 w-1/2 h-full bg-contain bg-no-repeat"
                    style={{ 
                        backgroundImage: `url(${ellipseImage})`,
                        backgroundSize: "cover", 
                        backgroundPosition: "left center"
                    }}
                ></div>

                <div className="relative z-10 w-1/2 max-w-xl text-left ml-10">
                    <p className="text-xl font-semibold text-[#05445E] mb-9 font-[poppins]">Step 4 out of 5</p>
                    <p className="text-lg text-[#05445E] font-bold mb-4 font-[poppins]">
                        Fill in the Details to help us build your profile and land perfect job opportunities.
                    </p>

                    <div className="mt-6 text-left">
                        <p className="text-lg font-semibold text-[#05445E] mb-2">Fill up Educational details</p>
                        <p className="text-md text-gray-600 font-semibold font-[inter] ">
                            Highest qualification/ Degree currently pursuing <span className="text-red-700">*</span>
                        </p>
                    </div>

                    {/* Qualification Buttons - 2 in first row, 4 in second row */}
                    <div className="flex flex-wrap gap-3 mt-3 font-[inter] ">
                        <div className="flex gap-4">
                            {qualifications.slice(0, 2).map((qualification, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelectQualification(qualification)}
                                    className={`inline-flex items-center justify-center px-4 py-2 font-medium text-[13px] leading-[150%] rounded-lg shadow-md transition hover:scale-105
                                        bg-white text-[#00A7AC] border border-gray-300 ${
                                            selectedQualification === qualification ? "border-[#00A7AC] font-bold" : ""
                                        }`}
                                >
                                    {qualification}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            {qualifications.slice(2).map((qualification, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelectQualification(qualification)}
                                    className={`inline-flex items-center justify-center px-4 py-2 font-xs font-[inter] text-[13px] leading-[150%] rounded-lg shadow-md transition hover:scale-105
                                        bg-white text-[#00A7AC] border border-gray-300 ${
                                            selectedQualification === qualification ? "border-[#00A7AC] font-bold" : ""
                                        }`}
                                >
                                    {qualification}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="mt-6 w-[73%] py-3 text-white font-[poppins] font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                        style={{ background: "linear-gradient(90deg, #05445E 0%, #00A7AC 100%)" }}
                    >
                        Next
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Step4;
