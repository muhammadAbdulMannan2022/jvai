import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { FaClock, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { MdOutlineLunchDining } from "react-icons/md";
import GradientTitle from "../../../Helpers/GradientTitle";

export default function JobDetails() {
  const { state } = useLocation();
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (state?.job) {
      setJob(state.job);
    }
  }, [state]);

  if (!job) {
    return (
      <div className="text-center py-10 text-xl text-gray-600">
        No job details available
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-10 max-w-7xl mx-auto requirmentjob">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 space-y-8">
        <GradientTitle
          text={job.title || "Untitled Job"}
          className="text-4xl font-semibold bg-gradient-to-r from-blue-900 to-purple-500"
        />
        <p className="text-lg text-gray-600">{job.intro || "No summary available"}</p>
        <div>
          <h2 className="text-2xl font-bold mb-2">Job Description</h2>
          <p className="text-gray-600 text-lg">{job.job_description || "No description available"}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Key Responsibilities</h2>
          <div
            className="text-gray-600 text-lg space-y-1"
            dangerouslySetInnerHTML={{
              __html: job.key_responsibilities || "<p>No responsibilities listed</p>",
            }}
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Requirements</h2>
          <div
            className="text-gray-600 text-lg space-y-1"
            dangerouslySetInnerHTML={{
              __html: job.requirements || "<p>No requirements listed</p>",
            }}
          />
        </div>
        <p className="mt-6 text-lg font-medium text-gray-900">
          {job.conclusion || "No closing note available"}
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 relative">
        <div className="bg-white sticky top-20 shadow-xl rounded-2xl p-6 border border-gray-200 space-y-4">
          <div className="text-gray-700 space-y-3">
            <div className="flex items-center gap-3">
              <FaBriefcase className="text-blue-600" />
              <span>{job.work_schedule || "Not specified"}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-blue-600" />
              <span>
                {job.working_hours_start && job.working_hours_end
                  ? `${job.working_hours_start} - ${job.working_hours_end}`
                  : "Not specified"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineLunchDining className="text-blue-600" />
              <span>{job.lunch_break_duration || "Not specified"}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>{job.location || "Not specified"}</span>
            </div>
          </div>
          <Link
            to="/career/apply"
            state={{
              title: job.title,
              time: job.working_hours_start && job.working_hours_end
                ? `${job.working_hours_start} - ${job.working_hours_end}`
                : "Not specified",
            }}
            className={`w-full bg-gradient-to-r from-blue-500 to-blue-950 text-white font-semibold py-2 px-10 rounded-lg transition ${job.published ? "hover:cursor-pointer" : "opacity-50 cursor-not-allowed"
              }`}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}