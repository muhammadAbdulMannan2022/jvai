import React, { useState } from "react";
import { useParams } from "react-router";
import { baseUri, useGetOneProjectQuery } from "../../redux/features/apiSlice";
import VideoPlayer from "../../Helpers/VideoPlayer";

export default function Projects() {
  const { id } = useParams();
  const {
    data,
    isLoading,
    isError,
  } = useGetOneProjectQuery(id, { skip: !id });

  const [isPlaying, setIsPlaying] = useState(false);
  const project = data?.Data;

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-600 text-xl">Loading project details...</p>
      </div>
    );
  }

  if (isError || !project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl">Failed to load project.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-4">{project.project_title}</h1>
      <p className="text-lg text-gray-700 mb-6">{project.project_short_description}</p>
      {
        project.project_video ? <div className="mt-10 space-y-4">
          <VideoPlayer onToggle={() => setIsPlaying(!isPlaying)} src={project.project_video} isPlaying={isPlaying} />
        </div> : project.project_picture ? <div className="mb-8">
          <img
            src={baseUri + project.project_picture}
            alt={project.project_title}
            className="rounded-lg w-full max-h-[500px] object-cover"
          />
        </div> : ""
      }

      {project.project_description && (
        <div
          className="prose max-w-none text-gray-800 mt-10"
          dangerouslySetInnerHTML={{ __html: project.project_description }}
        />
      )}

      {project.project_duration && (
        <p className="mt-8 text-sm text-gray-500">
          <strong>Duration:</strong> {project.project_duration}
        </p>
      )}
    </div>
  );
}
