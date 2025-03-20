import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, GraduationCap, BookOpen, Laptop2 } from "lucide-react";
import ellipseImage from "../assets/images/Ellipse 34.jpg";
import vectorImage from "../assets/images/Vector 60.jpg";
import "@fontsource/poppins";
import "@fontsource/inter";

const employmentOptions = [
  {
    title: "I’m Experienced",
    description: "I have work experience",
    description1: "(excluding Internships)",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "I’m a Fresher",
    description: "Recent Graduate",
    description1: "No Work Experience Yet",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "I’m an Intern",
    description: "Currently pursuing my studies",
    description1: "(No full-time work experience yet)",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "I’m a Freelancer",
    description: "Currently working with clients on different projects",
    description1: "No long-term contracts yet",
    icon: <Laptop2 className="w-6 h-6" />,
  },
];

const EmploymentDetails = () => {
  const navigate = useNavigate();
  const [selectedEmployment, setSelectedEmployment] = useState(null);

  const handleSelection = (option) => {
    setSelectedEmployment(option);
  };

  const handleBack = () => navigate(-1);

  const handleNext = () => {
    if (selectedEmployment) {
      navigate("/step12", { state: { selectedEmployment } });
    }
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

          <p className="font-bold text-[#05445E] mt-8">Employment Details *</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {employmentOptions.map((option, index) => (
              <button
                key={index}
                className={`border border-[#BEBEBE] rounded-lg px-3 py-4 text-center transition-all h-30 flex flex-col items-center justify-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#00A7AC] shadow-md ${
                  selectedEmployment === option.title ? "bg-[#00A7AC] text-white" : "bg-white text-[#05445E]"
                }`}
                onClick={() => handleSelection(option.title)}
              >
                {option.icon}
                
                <span className="font-bold text-sm p-2">{option.title}</span>
                <span className="text-xs">{option.description}</span>
                <span className="text-xs text-black">{option.description1}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-between gap-8">
            <button
              onClick={handleBack}
              className="w-1/2 py-2 bg-white border text-[#05445E] font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Back
            </button>

            <button
              onClick={handleNext}
              className={`w-1/2 py-2 text-white font-semibold rounded-lg shadow-lg transition ${
                selectedEmployment ? "hover:opacity-90" : "opacity-50 cursor-not-allowed"
              }`}
              style={{ background: selectedEmployment ? "linear-gradient(90deg, #05445E 0%, #00A7AC 100%)" : "#BEBEBE" }}
              disabled={!selectedEmployment}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentDetails;