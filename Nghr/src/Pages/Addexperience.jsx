import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ellipseImage from "../assets/images/Ellipse 34.jpg";
import vectorImage from "../assets/images/Vector 60.jpg";
import { Star, Plus, Minus } from "lucide-react";
import "@fontsource/poppins";
import "@fontsource/inter";

const AddExperience = () => {
  const navigate = useNavigate();

  // State for managing multiple forms
  const [forms, setForms] = useState([
    {
      id: 1,
      selectedStartMonth: "",
      selectedStartYear: "",
      selectedEndMonth: "",
      selectedEndYear: "",
      companyName: "",
      jobTitle: "",
      employmentType: "",
      selectedCountry: "",
      keySkills: [],
      policy: "",
      currentlyWorking: "",
      likeFeedback: "",
      dislikeFeedback: "",
      ratings: {
        "Overall Rating": 0,
        "Work - Life Balance": 0,
        "Salary Benefits": 0,
        "Promotions & Appraisal": 0,
        "Job Security": 0,
        "Skill Development / Learning": 0,
        "Work Satisfaction": 0,
        "Company Culture": 0,
      },
    },
  ]);

  // Constants
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
  const employmentTypes = [
    "Full Time",
    "Part Time",
    "Remote",
    "Work From Home",
  ];
  const years = Array.from(
    { length: new Date().getFullYear() - 1999 },
    (_, i) => i + 2000
  );
  const countries = [
    "United States",
    "United Kingdom",
    "India",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Brazil",
    "Japan",
    "China",
    "South Africa",
    "Mexico",
    "Italy",
    "Spain",
    "Russia",
    "Netherlands",
    "Switzerland",
    "Singapore",
    "South Korea",
    "New Zealand",
  ];
  const predefinedSkills = [
    "Design",
    "UI Designer",
    "UX Designer",
    "Critical Thinking",
    "Problem Solving",
  ];
  const policyOptions = ["Work from office", "Work from home", "Hybrid"];
  const ratingCriteria = [
    "Overall Rating",
    "Work - Life Balance",
    "Salary Benefits",
    "Promotions & Appraisal",
    "Job Security",
    "Skill Development / Learning",
    "Work Satisfaction",
    "Company Culture",
  ];

  // Add a new form
  const addForm = () => {
    const newForm = {
      id: forms.length + 1,
      selectedStartMonth: "",
      selectedStartYear: "",
      selectedEndMonth: "",
      selectedEndYear: "",
      companyName: "",
      jobTitle: "",
      employmentType: "",
      selectedCountry: "",
      keySkills: [],
      policy: "",
      currentlyWorking: "",
      likeFeedback: "",
      dislikeFeedback: "",
      ratings: {
        "Overall Rating": 0,
        "Work - Life Balance": 0,
        "Salary Benefits": 0,
        "Promotions & Appraisal": 0,
        "Job Security": 0,
        "Skill Development / Learning": 0,
        "Work Satisfaction": 0,
        "Company Culture": 0,
      },
    };
    setForms([...forms, newForm]);
  };

  // Remove a form
  const removeForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  // Handle form field changes
  const handleFormChange = (id, field, value) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === id ? { ...form, [field]: value } : form
      )
    );
  };

  // Handle rating changes
  const handleRating = (id, criteria, star) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === id
          ? { ...form, ratings: { ...form.ratings, [criteria]: star } }
          : form
      )
    );
  };

  // Handle feedback changes
  const handleFeedback = (id, field, value) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === id ? { ...form, [field]: value } : form
      )
    );
  };

  // Handle key skills changes
  const addSkill = (id, skill) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === id && !form.keySkills.includes(skill)
          ? { ...form, keySkills: [...form.keySkills, skill] }
          : form
      )
    );
  };

  const removeSkill = (id, skill) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === id
          ? { ...form, keySkills: form.keySkills.filter((s) => s !== skill) }
          : form
      )
    );
  };

  // Handle next button click
  const handleNext = () => {
    navigate("/step13", {
      state: {
        forms,
      },
    });
  };

  // Handle back button click
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold text-[#05445E] p-4 font-[poppins]">NGHR</h1>
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
          style={{
            backgroundImage: `url(${ellipseImage})`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="relative z-10 w-80 max-w-xl text-left ml-20">
          <p className="text-3xl font-semibold text-[#05445E] mb-4 font-[poppins]">
            Step 5 out of 5
          </p>
          <p className="text-2xl mt-8 text-[#05445E] font-bold mb-4 font-[poppins]">
            Fill in the details to help us build your profile and land perfect
            job opportunities.
          </p>
          <p className="font-bold text-[#05445E] font-[poppins] ">Fill up Employment details</p>
          <p className="text-[#05445E] mt-2 font-[poppins] ">
            Add your experience to your profile to help us match you with the
            right opportunities.
          </p>

          {/* Render Forms Dynamically */}
          {forms.map((form) => (
            <div key={form.id} className="mb-8">
              <div className="flex justify-between items-center">
                <p className="font-bold text-[#05445E] mt-4 font-[poppins] ">
                  Company {form.id}
                </p>
                {form.id > 1 && (
                  <button
                    onClick={() => removeForm(form.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Minus size={16} />
                  </button>
                )}
              </div>

              {/* Start Date Section */}
              <p className="font-bold text-[#05445E] mt-4 font-[inter] ">Start Date *</p>
              <div className="flex gap-4 mt-2">
                <select
                  className="border border-gray-300 rounded-md p-2 text-[#05445E]"
                  value={form.selectedStartMonth}
                  onChange={(e) =>
                    handleFormChange(
                      form.id,
                      "selectedStartMonth",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>

                <select
                  className="border border-gray-300 rounded-md p-2 text-[#05445E] font-[inter]"
                  value={form.selectedStartYear}
                  onChange={(e) =>
                    handleFormChange(
                      form.id,
                      "selectedStartYear",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* End Date Section */}
              <p className="font-bold text-[#05445E]  font-[inter] mt-4">End Date *</p>
              <div className="flex gap-4 mt-2">
                <select
                  className="border border-gray-300 rounded-md p-2 text-[#05445E]"
                  value={form.selectedEndMonth}
                  onChange={(e) =>
                    handleFormChange(
                      form.id,
                      "selectedEndMonth",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>

                <select
                  className="border border-gray-300 rounded-md p-2 font-[inter] text-[#05445E]"
                  value={form.selectedEndYear}
                  onChange={(e) =>
                    handleFormChange(form.id, "selectedEndYear", e.target.value)
                  }
                >
                  <option value="">Select Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company Name Input */}
              <p className="font-bold font-[inter] text-[#05445E] mt-4">Company Name *</p>
              <input
                type="text"
                placeholder="Eg: Infosys"
                className="border border-gray-300 rounded-md p-2 w-full mt-2 text-[#05445E] font-[inter]"
                value={form.companyName}
                onChange={(e) =>
                  handleFormChange(form.id, "companyName", e.target.value)
                }
              />

              {/* Job Title Input */}
              <p className="font-bold text-[#05445E]  font-[inter] mt-4">Title *</p>
              <input
                type="text"
                placeholder="Eg: Ex Senior UI/UX Designer"
                className="border border-gray-300 rounded-md p-2 w-full mt-2 text-[#05445E] font-[inter] "
                value={form.jobTitle}
                onChange={(e) =>
                  handleFormChange(form.id, "jobTitle", e.target.value)
                }
              />

              {/* Employment Type Dropdown */}
              <p className="font-bold text-[#05445E] mt-4 font-[inter] ">Employment Type *</p>
              <select
                className="border border-gray-300 rounded-md p-2 w-full mt-2 text-[#05445E]"
                value={form.employmentType}
                onChange={(e) =>
                  handleFormChange(form.id, "employmentType", e.target.value)
                }
              >
                <option value="">Select Employment Type</option>
                {employmentTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* Country Dropdown */}
              <p className="font-bold text-[#05445E] mt-4 font-[inter] ">Country *</p>
              <select
                className="border border-gray-300 rounded-md p-2 w-full mt-2 text-[#05445E]"
                value={form.selectedCountry}
                onChange={(e) =>
                  handleFormChange(form.id, "selectedCountry", e.target.value)
                }
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              {/* Key Skills Section */}
              <p className="font-bold text-[#05445E] font-[inter] mt-5">Key Skills *</p>
              <div className="border p-4 rounded-lg w-full mt-2 border-[#BEBEBE] flex flex-wrap gap-2 items-center">
                {form.keySkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#00A7AC] text-white px-3 py-1 rounded-lg flex items-center"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkill(form.id, skill)}
                      className="ml-2 text-white font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-9">
                {predefinedSkills.map((skill, index) => (
                  <button
                    key={index}
                    onClick={() => addSkill(form.id, skill)}
                    className="bg-gray-200 text-[#05445E] font-inter px-3 py-1 rounded-md hover:bg-[#00A7AC] hover:text-white transition"
                  >
                    {skill}
                  </button>
                ))}
              </div>

              {/* University Experience Rating */}
              <div className="mt-10">
                <p className="text-[#05445E] text-xl font-bold mb-2 font-[inter] ">
                  Rate the Company on the following criteria
                </p>
                {ratingCriteria.map((criteria, index) => (
                  <div key={index} className="mb-6 mt-4">
                    <label className="block text-[#05445E] font-bold">
                      {criteria} <span className="text-red-700">*</span>
                    </label>
                    <div className="flex gap-10 mt-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRating(form.id, criteria, star)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-9 h-9 ${
                              star <= form.ratings[criteria]
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

              {/* Feedback Sections */}
              <p className="text-[#05445E] font-semibold font-[inter] ">
                What do you like about working at your Company?
                <span className="text-red-600">*</span>
                <textarea
                  value={form.likeFeedback}
                  onChange={(e) =>
                    handleFeedback(form.id, "likeFeedback", e.target.value)
                  }
                  placeholder="e.g. I was a software engineer at Google"
                  className="border p-2 w-full rounded-lg mt-2 border-[#BEBEBE] resize-none"
                  rows={4}
                />
              </p>
              <p className="text-[#05445E] font-semibold font-[inter] ">
                What do you dislike about working at your Company?
                <span className="text-red-600">*</span>
                <textarea
                  value={form.dislikeFeedback}
                  onChange={(e) =>
                    handleFeedback(form.id, "dislikeFeedback", e.target.value)
                  }
                  placeholder="e.g. I was a software engineer at Google"
                  className="border p-2 w-full rounded-lg mt-2 border-[#BEBEBE] resize-none"
                  rows={4}
                />
              </p>

              {/* Work Policy Section */}
              <div className="w-full text-left">
                <p className="font-bold text-[#05445E] mt-6 font-[inter] ">
                  What is the work Policy at your Company?
                  <span className="text-red-700">*</span>
                </p>
                <div className="flex gap-4 mt-3">
                  {policyOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleFormChange(form.id, "policy", option)
                      }
                      className={`px-3 border rounded-lg transition ${
                        form.policy === option
                          ? "bg-white text-[#05445E]"
                          : "bg-white text-[#00A7AC] border-gray-400"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Currently Working Section */}
              <p className="font-bold text-[#05445E] mt-4 font-[inter] ">
                Do you currently work here?{" "}
                <span className="text-red-700">*</span>
              </p>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`currentlyWorking-${form.id}`}
                    value="yes"
                    checked={form.currentlyWorking === "yes"}
                    onChange={() =>
                      handleFormChange(form.id, "currentlyWorking", "yes")
                    }
                    className="hidden"
                  />
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      form.currentlyWorking === "yes"
                        ? "border-[#00A7AC]"
                        : "border-gray-400"
                    }`}
                  >
                    {form.currentlyWorking === "yes" && (
                      <div className="w-3 h-3 bg-[#00A7AC] rounded-full"></div>
                    )}
                  </div>
                  <span className="text-[#05445E]  font-[inter] font-semibold">Yes</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`currentlyWorking-${form.id}`}
                    value="no"
                    checked={form.currentlyWorking === "no"}
                    onChange={() =>
                      handleFormChange(form.id, "currentlyWorking", "no")
                    }
                    className="hidden"
                  />
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      form.currentlyWorking === "no"
                        ? "border-[#00A7AC]"
                        : "border-gray-400"
                    }`}
                  >
                    {form.currentlyWorking === "no" && (
                      <div className="w-3 h-3 bg-[#00A7AC] rounded-full"></div>
                    )}
                  </div>
                  <span className="text-[#05445E] font-semibold">No</span>
                </label>
              </div>
            </div>
          ))}

          {/* Add Experience Button */}
          <button
            onClick={addForm}
            className="mt-8 flex items-center gap-2 px-4 py-2 border rounded-lg bg-[#00A7AC] text-white font-[inter] hover:bg-gray-400 transition"
          >
            <Plus size={16} /> Add Experience
          </button>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between gap-8">
            <button
              onClick={handleBack}
              className="w-40 py-2 bg-white border font-[inter] text-[#05445E] font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className={`w-40 py-2 font-[inter] text-white font-semibold rounded-lg shadow-lg transition ${
                forms.every(
                  (form) =>
                    form.companyName &&
                    form.jobTitle &&
                    form.employmentType &&
                    form.selectedStartYear
                )
                  ? "hover:opacity-90"
                  : "opacity-50 cursor-not-allowed"
              }`}
              style={{
                background: "linear-gradient(90deg, #05445E 0%, #00A7AC 100%)",
              }}
              disabled={
                !forms.every(
                  (form) =>
                    form.companyName &&
                    form.jobTitle &&
                    form.employmentType &&
                    form.selectedStartYear
                )
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;