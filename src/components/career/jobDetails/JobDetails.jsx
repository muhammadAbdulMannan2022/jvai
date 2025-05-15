import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { FaClock, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { MdOutlineLunchDining } from "react-icons/md";
import GradientTitle from "../../../Helpers/GradientTitle";
import ApplyPopup from "../../../Helpers/PopUp";

// Jobs data ...
const jobs = [
  {
    id: "01",
    title: "UI/UX Designer",
    type: "Full Time - On site",
    schedule: "9:00 AM - 6:00 PM (1 hour lunch break)",
    location: "Rampura, Banasree Dhaka",
    isHiring: true,
    summary:
      "We are dedicated to crafting digital experiences that resonate globally. As a UI/UX Designer, you will play a pivotal role in shaping intuitive, user-centric interfaces.",
    description:
      "You will be responsible for designing seamless and engaging user interfaces. Collaborate with teams to research user needs and translate insights into innovative design solutions.",
    keyResponsibilities: [
      "Conduct user research and usability testing.",
      "Create wireframes, prototypes, and design mockups.",
      "Ensure UI consistency across platforms.",
      "Collaborate with developers and product managers.",
      "Adhere to global design standards and best practices.",
    ],
    requirements: [
      "Bachelor’s degree in relevant field.",
      "Proficiency in Figma, Adobe XD, or similar tools.",
      "Strong communication and problem-solving skills.",
      "Portfolio demonstrating design projects.",
    ],
    closingNote:
      "If you’re passionate about UI/UX, we’d love to hear from you!",
  },
  {
    id: "02",
    title: "Frontend Developer",
    type: "Full Time - On site",
    schedule: "9:00 AM - 6:00 PM (1 hour lunch break)",
    location: "Rampura, Banasree Dhaka",
    isHiring: false,
    summary:
      "Join our frontend team to build responsive, dynamic web applications. You’ll bring design to life using modern JavaScript frameworks.",
    description:
      "As a Frontend Developer, you will translate UI/UX designs into actual code. You will work closely with designers and backend developers to deliver seamless user experiences.",
    keyResponsibilities: [
      "Develop responsive web interfaces using React or similar frameworks.",
      "Ensure cross-browser compatibility and performance.",
      "Integrate RESTful APIs and maintain clean codebases.",
      "Work with design and product teams to implement features.",
    ],
    requirements: [
      "Experience with JavaScript, React, HTML, CSS.",
      "Understanding of version control (Git).",
      "Problem-solving and debugging skills.",
      "Attention to detail in UI implementation.",
    ],
    closingNote:
      "We value creativity and innovation—bring your frontend passion to our team!",
  },
  {
    id: "03",
    title: "Backend Developer",
    type: "Full Time - On site",
    schedule: "9:00 AM - 6:00 PM (1 hour lunch break)",
    location: "Rampura, Banasree Dhaka",
    isHiring: true,
    summary:
      "Drive the backbone of our applications. As a Backend Developer, you'll build scalable systems and manage data-driven functionality.",
    description:
      "Work with modern backend technologies to build and maintain APIs, databases, and server-side logic that support our products.",
    keyResponsibilities: [
      "Develop and maintain server-side codebases.",
      "Build RESTful APIs and manage databases.",
      "Ensure data security and performance.",
      "Collaborate with frontend teams on integration.",
    ],
    requirements: [
      "Proficiency in Node.js, Express, or similar.",
      "Database knowledge (MongoDB, PostgreSQL, etc.).",
      "Familiarity with cloud services (AWS, GCP).",
      "Problem-solving and collaboration skills.",
    ],
    closingNote:
      "We're looking for back-end warriors ready to scale up systems and performance.",
  },
  {
    id: "04",
    title: "Product Manager",
    type: "Full Time - On site",
    schedule: "9:00 AM - 6:00 PM (1 hour lunch break)",
    location: "Rampura, Banasree Dhaka",
    isHiring: true,
    summary:
      "Lead the vision and execution of products that matter. As a Product Manager, you'll bridge business needs and development.",
    description:
      "You’ll define product roadmaps, gather user requirements, and guide cross-functional teams to deliver valuable features.",
    keyResponsibilities: [
      "Define and prioritize product features and roadmaps.",
      "Work with engineering, design, and marketing teams.",
      "Conduct market and competitor analysis.",
      "Ensure timely and high-quality product delivery.",
    ],
    requirements: [
      "Experience in product or project management.",
      "Strong leadership and communication skills.",
      "Understanding of agile methodologies.",
      "Analytical mindset and user empathy.",
    ],
    closingNote: "Ready to lead products that make an impact? Apply now!",
  },
  {
    id: "05",
    title: "Motion Designer",
    type: "Full Time - On site",
    schedule: "9:00 AM - 6:00 PM (1 hour lunch break)",
    location: "Rampura, Banasree Dhaka",
    isHiring: true,
    summary:
      "Bring stories to life through motion. As a Motion Designer, you'll create compelling animations and visuals that captivate.",
    description:
      "You will design and animate graphics for a variety of platforms, working closely with content, marketing, and product teams.",
    keyResponsibilities: [
      "Create motion graphics and animations for web and video.",
      "Translate concepts into engaging visual stories.",
      "Collaborate with design and marketing teams.",
      "Stay up-to-date with animation trends and tools.",
    ],
    requirements: [
      "Proficiency in After Effects, Premiere Pro, or similar tools.",
      "Strong storytelling and visual skills.",
      "Ability to meet tight deadlines and adapt to feedback.",
      "A portfolio showcasing motion design work.",
    ],
    closingNote:
      "If you love blending creativity with movement, we'd love to work with you!",
  },
];

export default function JobDetails() {
  const location = useLocation();
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (location?.state?.jobId) {
      const foundJob = jobs.find((j) => j.id === location.state.jobId);
      if (foundJob) setJob(foundJob);
    }
  }, [location]);

  if (!job) {
    return (
      <div className="text-center py-10 text-xl text-gray-600">
        Loading job details...
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 p-10 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 space-y-8">
          <GradientTitle
            text={job.title}
            className={
              "text-4xl font-semibold bg-gradient-to-r from-blue-900 to-purple-500"
            }
          />
          <p className="text-lg text-gray-600">{job.summary}</p>
          <div>
            <h2 className="text-2xl font-bold mb-2">Job Description</h2>
            <p className="text-gray-600 text-lg">{job.description}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Key Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600 text-lg space-y-1">
              {job.keyResponsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-600 text-lg space-y-1">
              {job.requirements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-lg font-medium text-gray-900">
            {job.closingNote}
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200 space-y-4 sticky top-10">
            <div className="text-gray-700 space-y-3">
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-blue-600" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-blue-600" />
                <span>{job.schedule.split("(")[0].trim()}</span>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineLunchDining className="text-blue-600" />
                <span>{job.schedule.split("(")[1]?.replace(")", "")}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>{job.location}</span>
              </div>
            </div>
            <Link
              to="/career/apply"
              state={{
                title: job.title,
                time: job.schedule.split("(")[0].trim(),
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-950 text-white hover:cursor-pointer font-semibold py-2 px-10 rounded-lg transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
