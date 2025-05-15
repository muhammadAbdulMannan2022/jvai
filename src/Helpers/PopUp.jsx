import React, { useEffect, useRef, useState } from "react";
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";

export default function PopUp({ isOpen, onClose }) {
  const fileInputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") {
      onClose();
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click(); // open file dialog
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Simulate upload
      setTimeout(() => {
        onClose();
      }, 500);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      // Simulate upload
      setTimeout(() => {
        onClose();
      }, 500);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  return (
    <div
      id="popup-overlay"
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={handleOutsideClick}
    >
      <div
        className={`w-[90%] max-w-md bg-white rounded-xl p-6 relative shadow-xl border-4 transition-colors ${
          dragOver ? "border-blue-500" : "border-transparent"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <BsFillFileEarmarkPlusFill className="text-6xl text-blue-700 mb-4" />
          <p className="text-gray-600 mb-5">
            Drag and drop your CV/RESUME here, or click ‘Upload’ to select a
            file
          </p>
          <button
            onClick={handleUploadClick}
            className="px-6 py-2 border border-blue-500 text-blue-700 rounded-lg hover:bg-blue-50"
          >
            Upload
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
          />
        </div>
        <button
          onClick={onClose}
          className="absolute bottom-4 right-4 text-blue-600 underline hover:cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}
