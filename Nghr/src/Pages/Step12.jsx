import React from 'react';
import { useNavigate } from 'react-router-dom';
import ellipseImage from "../assets/images/Ellipse 34.jpg";
import vectorImage from "../assets/images/Vector 60.jpg";
import "@fontsource/poppins";
import "@fontsource/inter";

const Step12 = () => {
    const navigate = useNavigate();

    const handleAddExperience = () => {
        navigate("/add-experience");
    };

    return (
        <div className="relative min-h-screen flex flex-col">
            <h1 className="text-2xl font-bold text-[#05445E] p-4">NGHR</h1>
            <div
                className="relative flex flex-row items-center justify-between flex-grow px-10 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${vectorImage})`,
                    backgroundPosition: "100% center",
                    backgroundSize: "50%",
                }}
            >
                <div
                    className="absolute left-0 top-0 w-1/2 h-full bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${ellipseImage})`, backgroundSize: "cover" }}
                ></div>

                <div className="relative z-10 w-80 max-w-xl text-left ml-20">
                    <p className="text-3xl font-semibold text-[#05445E] mb-4">Step 4 out of 5</p>
                    <p className="text-2xl mt-8 text-[#05445E] font-bold mb-4">
                        Fill in the details to help us build your profile and land perfect job opportunities.
                    </p>
                    <p className="font-bold text-[#05445E]">Fill up Employment details</p>
                    <p className="text-[#05445E] mt-10">Add your experience to your profile to help us match you with the right opportunities.</p>
                    
                    <button 
                        onClick={handleAddExperience} 
                        className="mt-6 px-4 py-2 bg-[#00A7AC] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
                    >
                        + Add Experience
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step12;
