import React, { useState } from "react";
import TextAreaField from "../../../Helpers/TextAreaField";
import InputField from "../../../Helpers/InputField";
import GradientTitle from "../../../Helpers/GradientTitle";
import { useLocation } from "react-router";
import SubmitSuccessFulOverlay from "./SubmitSuccessFulOverlay";

export default function ApplyJob() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    whyApply: "",
    projectExperience: "",
    portfolio: "",
    salaryExpectations: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const location = useLocation();
  const { state } = location;
  const jobTitle = state?.title || "Apply for Job";
  const time = state?.time || "";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!resumeFile) {
      alert("Please upload your resume.");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form Submitted:", {
        ...formData,
        resumeFile,
      });

      setIsOverlayOpen(true);

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        whyApply: "",
        projectExperience: "",
        portfolio: "",
        salaryExpectations: "",
      });
      setResumeFile(null);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <SubmitSuccessFulOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
      />

      <div className="max-w-2xl mx-auto py-20">
        <div>
          <GradientTitle
            text={jobTitle}
            className="bg-gradient-to-r from-blue-500 to-purple-500 w-full text-center text-4xl font-bold"
          />
          <p className="w-full text-center my-5 text-xl text-gray-800">
            {time}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Full Name"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />

          <InputField
            label="Your Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <InputField
            label="Your Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />

          <TextAreaField
            label="Why you decided to apply here & why should we select you?"
            id="whyApply"
            name="whyApply"
            value={formData.whyApply}
            onChange={handleInputChange}
            required
          />

          <TextAreaField
            label="Tell us about a project that you worked on"
            id="projectExperience"
            name="projectExperience"
            value={formData.projectExperience}
            onChange={handleInputChange}
            required
          />

          <InputField
            label="Share your portfolio (Behance, Dribbble, etc.)"
            id="portfolio"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleInputChange}
          />

          <InputField
            label="Your current salary & what are your salary expectations?"
            id="salaryExpectations"
            name="salaryExpectations"
            value={formData.salaryExpectations}
            onChange={handleInputChange}
            required
          />

          {/* Resume Upload */}
          <div className="flex justify-between items-end">
            <div>
              <p className="font-medium mb-2">Upload your resume</p>
              <div className="flex items-center gap-2 border px-2 py-1 rounded-xl border-gray-300">
                <label
                  htmlFor="resume"
                  className="cursor-pointer px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 font-bold text-blue-500"
                >
                  Choose file
                </label>
                <span className="text-sm text-gray-500">
                  {resumeFile ? resumeFile.name : "No chosen file"}
                </span>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={`bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white px-6 py-2 rounded ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
