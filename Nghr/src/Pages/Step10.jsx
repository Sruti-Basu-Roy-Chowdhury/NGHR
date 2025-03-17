import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ellipseImage from "../assets/images/Ellipse 34.jpg";
import vectorImage from "../assets/images/Vector 60.jpg";

const Step10 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedPlan = location.state?.selectedPlan || { title: "No Plan Selected" };
    const selectedQualification = location.state?.selectedQualification || "Not Provided";
    const previousPercentage = location.state?.percentage || "";
    const previousCgpa = location.state?.cgpa || "";

    const [percentage, setPercentage] = useState(previousPercentage);
    const [gradingSystem, setGradingSystem] = useState("");

    const handleBack = () => {
        navigate("/step8", { state: { selectedPlan, selectedQualification, percentage, cgpa: previousCgpa } });
    };

    const handleNext = () => {
        if (!gradingSystem) {
            alert("Please select or enter a grading system before proceeding.");
            return;
        }
        navigate("/step10", { state: { selectedPlan, selectedQualification, percentage, cgpa: previousCgpa, gradingSystem } });
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

                  
                    </div>
                </div>
            </div>
        
    );
};

export default Step10;
