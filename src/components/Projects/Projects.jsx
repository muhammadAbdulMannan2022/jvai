import React from "react";
import { useParams } from "react-router";

export default function Projects() {
  const { id } = useParams();
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-center text-5xl font-bold">
        Project `{id}` will come in future
      </h1>
    </div>
  );
}
