import React, { useState } from "react";
import TextAreaField from "../../../Helpers/TextAreaField";
import InputField from "../../../Helpers/InputField";
import GradientTitle from "../../../Helpers/GradientTitle";
import { useLocation } from "react-router";
import SubmitSuccessFulOverlay from "./SubmitSuccessFulOverlay";
import { useApplyOnJobMutation } from "../../../redux/features/apiSlice";

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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [apply, { isLoading: isApplyLoading }] = useApplyOnJobMutation();

  const location = useLocation();
  const { state } = location;
  const jobTitle = state?.title || "Apply for Job";
  const time = state?.time || "";
  const jobId = state?.id || "";

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    if (!formData.whyApply.trim()) newErrors.whyApply = "Motivation is required";
    if (!formData.projectExperience.trim()) newErrors.projectExperience = "Project experience is required";
    if (!formData.salaryExpectations.trim()) newErrors.salaryExpectations = "Salary expectations are required";
    if (!resumeFile) newErrors.resume = "Resume is required";

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone number validation (basic format: allows numbers, +, -, and spaces)
    const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format";
    }

    // Portfolio URL validation (if provided)
    if (formData.portfolio) {
      const urlRegex = /^https?:\/\//;
      if (!urlRegex.test(formData.portfolio)) {
        newErrors.portfolio = "Invalid URL format";
      }
    }

    // Resume file validation
    if (resumeFile) {
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (!allowedTypes.includes(resumeFile.type)) {
        newErrors.resume = "Resume must be a PDF, DOC, or DOCX file";
      }
      if (resumeFile.size > maxSize) {
        newErrors.resume = "Resume file size must be less than 5MB";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
    setErrors((prev) => ({ ...prev, resume: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("job", jobId);
      formDataToSend.append("full_name", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone_number", formData.phoneNumber);
      formDataToSend.append("motivation", formData.whyApply);
      formDataToSend.append("project_description", formData.projectExperience);
      formDataToSend.append("portfolio_url", formData.portfolio);
      formDataToSend.append("salary_expectations", formData.salaryExpectations);
      formDataToSend.append("resume", resumeFile);

      await apply(formDataToSend).unwrap();

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
      setErrors({});
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: "Failed to submit application. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SubmitSuccessFulOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
      />

      <div className="max-w-2xl px-2 md:mx-auto py-20">
        <div>
          <GradientTitle
            text={jobTitle}
            className="bg-gradient-to-r from-blue-500 to-purple-500 w-full text-center text-4xl font-bold"
          />
          <p className="w-full text-center my-5 text-xl text-gray-800">
            {time}
          </p>
        </div>

        {errors.submit && (
          <div className="text-red-500 text-center mb-4">{errors.submit}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <InputField
              label="Full Name"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <InputField
              label="Your Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <InputField
              label="Your Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <TextAreaField
              label="Why you decided to apply here & why should we select you?"
              id="whyApply"
              name="whyApply"
              value={formData.whyApply}
              onChange={handleInputChange}
              required
            />
            {errors.whyApply && (
              <p className="text-red-500 text-sm mt-1">{errors.whyApply}</p>
            )}
          </div>

          <div>
            <TextAreaField
              label="Tell us about a project that you worked on"
              id="projectExperience"
              name="projectExperience"
              value={formData.projectExperience}
              onChange={handleInputChange}
              required
            />
            {errors.projectExperience && (
              <p className="text-red-500 text-sm mt-1">{errors.projectExperience}</p>
            )}
          </div>

          <div>
            <InputField
              label="Share your portfolio (Behance, Dribbble, etc.)"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleInputChange}
            />
            {errors.portfolio && (
              <p className="text-red-500 text-sm mt-1">{errors.portfolio}</p>
            )}
          </div>

          <div>
            <InputField
              label="Your current salary & what are your salary expectations?"
              id="salaryExpectations"
              name="salaryExpectations"
              value={formData.salaryExpectations}
              onChange={handleInputChange}
              required
            />
            {errors.salaryExpectations && (
              <p className="text-red-500 text-sm mt-1">{errors.salaryExpectations}</p>
            )}
          </div>

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
              {errors.resume && (
                <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
              )}
            </div>

            <button
              type="submit"
              className={`bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white px-6 py-2 rounded ${isSubmitting || isApplyLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              disabled={isSubmitting || isApplyLoading}
            >
              {isSubmitting || isApplyLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}