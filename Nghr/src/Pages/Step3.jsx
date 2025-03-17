import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import ellipseImage from "../assets/images/Ellipse 34.jpg";
import vectorImage from "../assets/images/Vector 60.jpg";

const Step3 = () => {
    const navigate = useNavigate();

    const plans = [
        { title: "Free", price: "₹1500 / MO", desc: "Start for free and see for yourself" },
        { title: "Basics", price: "₹2000 / MO", desc: "Start the basic plan and land amazing job opportunities", mostPopular: true },
        { title: "Premium", price: "₹5000 / MO", desc: "Upgrade to the premium plan and begin your journey with us" }
    ];

    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    const handleContinue = () => {
        if (selectedPlan) {
            navigate("/step4", { state: { selectedPlan } });
        } else {
            alert("Please select a plan before continuing.");
        }
    };

    const features = [
        "Screen recording & cam bubble",
        "Instant editing",
        "Unlimited transcriptions",
        "Privacy controls",
        "Viewer insights",
        "Screen recording & cam bubble",
        "Instant editing",
        "Unlimited transcriptions"
    ];

    return (
        <div className="relative">
            <h1 className="text-2xl font-bold text-[#05445E] p-4">NGHR</h1>
            
            <div
                className="relative flex flex-row items-center justify-center min-h-[calc(100vh-1in)] w-full bg-cover bg-no-repeat px-6"
                style={{ backgroundImage: `url(${vectorImage})`, backgroundPosition: "right center", backgroundSize: "50%" }}
            >
                <div
                    className="absolute left-0 top-0 w-1/2 h-full bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${ellipseImage})`, backgroundSize: "cover", backgroundPosition: "left center" }}
                ></div>
                
                <div className="relative z-10 w-1/2 max-w-lg text-left flex flex-col items-center mr-2">
                    <p className="text-xl font-semibold text-[#05445E]">Step 3 out of 5</p>
                    <p className="text-lg text-[#05445E]">Choose the plan that best suits your job search needs</p>

                    <div className="space-y-4 mt-6 w-full">
                        {plans.map((plan, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelectPlan(plan)}
                                className={`relative w-[22rem] h-[6rem] font-semibold rounded-2xl shadow-md transition-transform flex flex-col items-center justify-center hover:scale-105
                                    ${selectedPlan?.title === plan.title
                                        ? "bg-white border-[3px] border-transparent"
                                        : "bg-white border border-[#00A7AC78] text-[#05445E]"
                                    }`}
                                style={selectedPlan?.title === plan.title ? {
                                    borderWidth: "3px",
                                    borderStyle: "solid",
                                    borderImageSource: "linear-gradient(135deg, #05445E 0%, #268AFF 50%, #00A7AC 100%)",
                                    borderImageSlice: "1",
                                    borderRadius: "1rem"
                                } : {}}
                            >
                                {selectedPlan?.title === plan.title && (
                                    <div
                                        className="absolute flex items-center justify-center"
                                        style={{
                                            width: "25.57px",
                                            height: "25.57px",
                                            background: "#05445E",
                                            top: "-12px",
                                            right: "-7.90px",
                                            borderRadius: "50%",
                                        }}
                                    >
                                        <svg
                                            width="17.12"
                                            height="12.45"
                                            viewBox="0 0 17.12 12.45"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 6.5L6.5 11L16 1"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                )}

                                {plan.mostPopular && (
                                    <div
                                        className="absolute bg-gradient-to-r from-[#00A7AC] to-[#05445E] text-white text-xs font-bold uppercase flex items-center justify-center"
                                        style={{
                                            width: "131.07px",
                                            height: "29.90px",
                                            left: "-0.4px",
                                            top: "0px",
                                            borderTopLeftRadius: "10px",
                                            borderBottomRightRadius: "10px",
                                        }}
                                    >
                                        <span>Most Popular</span>
                                    </div>
                                )}

                                <div className="flex flex-col w-full px-4 relative">
                                    <span className="block text-lg font-bold text-left">{plan.title}</span>
                                    <span className="block text-xs mt-3 text-left">{plan.desc}</span>
                                    <span className="text-sm font-bold absolute right-4 top-1/2 transform -translate-y-1/2">{plan.price}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleContinue}
                        className="mt-6 w-[22rem] py-3 bg-[#05445E] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#032d3c] transition"
                    >
                        Continue
                    </button>
                </div>

                <div className="relative z-10 w-1/2 max-w-lg flex justify-center">
                    <div className="p-6 bg-white shadow-lg rounded-2xl w-[20rem] h-[22rem] text-center">
                        <p className="text-lg font-semibold text-[#05445E]">Basic Plan</p>
                        <div className="mt-6 flex flex-col items-start space-y-2">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Check className="text-[#05445E]" size={20} />
                                    <p className="text-gray-700 text-sm">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step3;
