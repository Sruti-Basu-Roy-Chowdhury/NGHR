import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ellipseImage from "../assets/images/Ellipse 34.jpg";
import vectorImage from "../assets/images/Vector 60.jpg";
import { Star } from "lucide-react";
import "@fontsource/poppins";
import "@fontsource/inter";

const universities = [
  "National Institute of Technology",
  "Indian Institute of Technology",
  "Cooch Behar Government Engineering College",
  "Jadavpur University",
  "University of Calcutta",
  "Banaras Hindu University",
  "Delhi University",
  "Anna University",
  "Visvesvaraya Technological University",
  "Pune University",
  "Aligarh Muslim University",
  "Amity University",
  "Vellore Institute of Technology",
  "Birla Institute of Technology and Science",
  "Manipal Academy of Higher Education",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = Array.from({ length: 50 }, (_, i) =>
  (new Date().getFullYear() - i).toString()
);

const predefinedSkills = [
  "Design",
  "Creative Thinking",
  "UI Design",
  "UX Design",
  "Problem Solving",
  "Others",
];

const ratingCriteria = [
  "Quality of Education",
  "Campus Facilities",
  "Faculty Support",
  "Career Services",
  "Overall Experience",
];

const Step10 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || {
    title: "No Plan Selected",
  };
 
 
  const [university, setUniversity] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [passMonth, setPassMonth] = useState("");
  const [passYear, setPassYear] = useState("");
  const [keySkills, setKeySkills] = useState([]);
  const [skills, setSkills] = useState(predefinedSkills);
  const [newSkill, setNewSkill] = useState("");
  const [newFeedback, setFeedback] = useState("");
  const [ratings, setRatings] = useState({
    "Quality of Education": 0,
    "Campus Facilities": 0,
    "Faculty Support": 0,
    "Career Services": 0,
    "Overall Experience": 0,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  // Form validation
  useEffect(() => {
    const validateForm = () => {
      // Check if all required fields are filled
      const allRatingsFilled = Object.values(ratings).every(
        (rating) => rating > 0
      );
      const isUniversitySelected = university !== "";
      const areDatesSelected =
        startMonth !== "" &&
        startYear !== "" &&
        passMonth !== "" &&
        passYear !== "";
      const areSkillsSelected = keySkills.length > 0;
      const isFeedbackProvided = newFeedback.length >= 10; // Reduced character requirement from 400 to 50

      return (
        isUniversitySelected &&
        areDatesSelected &&
        areSkillsSelected &&
        allRatingsFilled &&
        isFeedbackProvided
      );
    };

    setIsFormValid(validateForm());
  }, [
    university,
    startMonth,
    startYear,
    passMonth,
    passYear,
    keySkills,
    ratings,
    newFeedback,
  ]);

  const toggleSkill = (skill) => {
    setKeySkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      newSkill.trim() !== "" &&
      !skills.includes(newSkill)
    ) {
      setSkills([...skills, newSkill]);
      setNewSkill(""); // Clear input after adding
    }
  };

  const handleRating = (criteria, star) => {
    setRatings((prev) => ({
      ...prev,
      [criteria]: star,
    }));
  };

  const handleFeedback = (e) => {
    if (
      e.key === "Enter" &&
      newFeedback.trim() !== "" &&
      !newFeedback.includes(newFeedback)
    ) {
      setFeedback([newFeedback]);
      setFeedback(""); // Clear input after adding
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    if (isFormValid) {
      navigate("/step11", {
        state: {
          university,
          startMonth,
          startYear,
          passMonth,
          passYear,
          keySkills,
          ratings,
          newFeedback,
        },
      });
    }
  };

  return (
    <div className="relative">
      <h1 className="text-2xl font-bold text-[#05445E] p-4">NGHR</h1>

      <div
        className="relative flex flex-row items-center justify-between min-h-[calc(100vh-1in)] w-full bg-cover bg-no-repeat px-10"
        style={{
          backgroundImage: `url(${vectorImage})`,
          backgroundPosition: "100% center",
          backgroundSize: "50%",
        }}
      >
        <div
          className="absolute left-0 top-0 w-1/2 h-full bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${ellipseImage})`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        ></div>

        <div className="relative z-10 w-80 max-w-xl text-left ml-20">
          <p className="text-3xl font-semibold text-[#05445E] mb-4">
            Step 4 out of 5
          </p>
          <p className="text-2xl mt-9 text-[#05445E] font-bold mb-4">
            Fill in the details to help us build your profile and land perfect
            job opportunities.
          </p>

          {/* University Dropdown */}
          <p className="font-bold text-[#05445E]">University/ Institute *</p>
          <div className="mt-4 relative">
            <div
              className="border rounded p-2 w-full mt-2 flex justify-between items-center cursor-pointer text-[#BEBEBE]"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {university || "E.g. National Institute of Technology"}
              <FaChevronDown />
            </div>
            {showDropdown && (
              <ul className="border rounded mt-1 w-full bg-white shadow-lg absolute z-10">
                {universities.map((uni, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setUniversity(uni);
                      setShowDropdown(false);
                    }}
                  >
                    {uni}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Starting Date */}
          <div className="mt-4 flex space-x-4">
            <div className="relative w-1/2">
              <label className="block text-[#05445E] font-bold">
                Starting Month *
              </label>
              <select
                className="border border-[#BEBEBE] rounded p-2 w-full mt-2 text-[#BEBEBE]"
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
              >
                <option value="text-[#BEBEBE] ">Select Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative w-1/2">
              <label className="block text-[#05445E] font-bold">
                Starting Year *
              </label>
              <select
                className="border border-[#BEBEBE] rounded p-2 w-full mt-2 text-[#BEBEBE]"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
              >
                <option value="">Select Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Passing Date */}
          <div className="mt-4 flex space-x-4">
            <div className="relative w-1/2">
              <label className="block text-[#05445E] font-bold">
                Passing Month *
              </label>
              <select
                className="border rounded border-[#BEBEBE] p-2 w-full mt-2 text-[#BEBEBE]"
                value={passMonth}
                onChange={(e) => setPassMonth(e.target.value)}
              >
                <option value="">Select Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative w-1/2">
              <label className="block text-[#05445E]  font-bold">
                Passing Year *
              </label>
              <select
                className="border border-[#BEBEBE] rounded p-2 w-full mt-2 text-[#BEBEBE]"
                value={passYear}
                onChange={(e) => setPassYear(e.target.value)}
              >
                <option value="">Select Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Key Skills */}
          <div className="mt-4">
            <label className="block text-[#05445E] font-bold">
              Key Skills *
            </label>

            <div className="border p-2 rounded-lg w-full mt-2 border-[#BEBEBE] flex flex-wrap gap-2 items-center">
              {keySkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#00A7AC] text-white px-3 py-1 rounded-lg flex items-center"
                >
                  {skill}
                  <button
                    onClick={() =>
                      setKeySkills(keySkills.filter((s) => s !== skill))
                    }
                    className="ml-2 text-white font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}

              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    newSkill.trim() !== "" &&
                    !keySkills.includes(newSkill)
                  ) {
                    setKeySkills([...keySkills, newSkill]); // Add skill to keySkills
                    setNewSkill(""); // Clear input
                  }
                }}
                placeholder="Type a skill and press Enter"
                className="border-none outline-none flex-1"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  className={`border border-[#BEBEBE] rounded-lg px-3 py-1 
                    ${
                      keySkills.includes(skill)
                        ? "bg-[#00A7AC] text-white"
                        : "bg-white text-[#00A7AC]"
                    }`}
                  onClick={() => {
                    if (!keySkills.includes(skill)) {
                      setKeySkills([...keySkills, skill]); // Add skill on click
                    }
                  }}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* University Experience Rating */}
          <div className="mt-8 ">
            <p className="text-[#05445E] text-xl font-bold mb-2">
              Rate Your University Experience
            </p>
            {ratingCriteria.map((criteria, index) => (
              <div key={index} className="mb-5">
                <label className="block text-[#05445E] font-bold">
                  {criteria} <span className="text-red-700">*</span>
                </label>
                <div className="flex gap-9">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRating(criteria, star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= ratings[criteria]
                            ? "fill-[#00A7AC] text-[#00A7AC]"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#05445E] font-semibold ">
            Feedback (share your experiences with us)
            <span className="text-red-600">*</span>
            <textarea
              value={newFeedback}
              onChange={(e) => setFeedback(e.target.value)}
              onKeyDown={handleFeedback}
              placeholder="e.g. Learning in such a peaceful environment was really fun"
              className="border p-2 w-full rounded-lg mt-2 border-[#BEBEBE] resize-none"
              rows={4}
            />
          </p>
          <h1 className="text-[#05445E] text-xs font-semibold ">
            400 Characters minimum
          </h1>

          <div className="mt-6 flex justify-between gap-8">
            <button
              onClick={handleBack}
              className="w-1/2 py-2 bg-white border  text-[#05445E] font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Back
            </button>

            <button
              onClick={handleNext}
              className={`w-1/2 py-2 text-white font-semibold rounded-lg shadow-lg transition ${
                isFormValid
                  ? "hover:opacity-90"
                  : "opacity-50 cursor-not-allowed"
              }`}
              style={{
                background: "linear-gradient(90deg, #05445E 0%, #00A7AC 100%)",
              }}
              disabled={!isFormValid}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step10;