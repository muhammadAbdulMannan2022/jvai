import React from "react";

export default function GradientTitle({ text, className }) {
  return (
    <h1 className={`inline-block text-transparent bg-clip-text ${className}`}>
      {text}
    </h1>
  );
}
