import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";

export default function ContactHeroForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    service: "",
    budget: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Form data:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        whatsapp: "",
        email: "",
        service: "",
        budget: "",
        details: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const RequiredStar = () => (
    <FaStarOfLife className="inline-block text-red-500 text-[8px] ml-1" />
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto text-white bg-[#1e2a4aa9] p-5 rounded-2xl"
    >
      {/* Full Name and WhatsApp */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-gray-300">
            Full Name <RequiredStar />
          </label>
          <input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Jubayer Ahmad"
            required
            className="w-full bg-[#1e2a4aa9] border border-[#2a3a5a] rounded px-4 py-2 text-gray-200 placeholder:text-gray-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="whatsapp" className="text-gray-300">
            WhatsApp Number (Optional)
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleInputChange}
            placeholder="01234567890"
            className="w-full bg-[#1e2a4aa9] border border-[#2a3a5a] rounded px-4 py-2 text-gray-200 placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="text-gray-300">
          Your Email <RequiredStar />
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="youremail@gmail.com"
          required
          className="w-full bg-[#1e2a4aa9] border border-[#2a3a5a] rounded px-4 py-2 text-gray-200 placeholder:text-gray-500"
        />
      </div>

      {/* Service and Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="text-gray-300">
            Service <RequiredStar />
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={(e) => handleSelectChange("service", e.target.value)}
            className="w-full appearance-none bg-[#1e2a4aa9] border border-[#2a3a5a] rounded px-4 py-2 text-gray-200 focus:outline-none"
            required
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="web-development">🌐 Web Development</option>
            <option value="mobile-app">📱 Mobile App Development</option>
            <option value="ui-ux">🎨 UI/UX Design</option>
            <option value="branding">🏷️ Branding</option>
            <option value="marketing">📈 Digital Marketing</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-gray-300">
            Project Budget <RequiredStar />
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={(e) => handleSelectChange("budget", e.target.value)}
            className="w-full appearance-none bg-[#1e2a4aa9] border border-[#2a3a5a] rounded px-4 py-2 text-gray-200 focus:outline-none"
            required
          >
            <option value="" disabled>
              Select Your Range
            </option>
            <option value="less-1k">Less than $1,000</option>
            <option value="1k-5k">$1,000 - $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-plus">$25,000+</option>
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div className="mb-6">
        <label htmlFor="details" className="text-gray-300">
          Project Details <RequiredStar />
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleInputChange}
          placeholder="Tell us about your idea..."
          rows={5}
          className="w-full bg-[#1e2a4aa9] border border-[#2a3a5a] rounded px-4 py-2 text-gray-200 placeholder:text-gray-500 resize-none focus:outline-0"
        />
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white px-6 py-2 rounded transition ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Sending..." : "Contact Us"}
      </button>
    </form>
  );
}
