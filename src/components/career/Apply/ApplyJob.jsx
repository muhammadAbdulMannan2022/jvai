import React, { useState } from "react";
import TextAreaField from "../../../Helpers/TextAreaField";
import InputField from "../../../Helpers/InputField";

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

      alert("Application submitted successfully!");
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
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Apply for Job</h1>

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
          type="tel"
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
        <div className="flex justify-between">
          <div>
            <p className="font-medium mb-2">Upload your resume</p>
            <div className="flex items-center gap-2">
              <label
                htmlFor="resume"
                className="cursor-pointer px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50"
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

          <div className="pt-4">
            <button
              type="submit"
              className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded ${
                isSubmitting && "opacity-50 cursor-not-allowed"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
