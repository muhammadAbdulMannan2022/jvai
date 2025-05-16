import React, { useEffect } from "react";

export default function SubmitSuccessFulOverlay({ isOpen, onClose }) {
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

  return (
    <div
      id="popup-overlay"
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={handleOutsideClick}
    >
      <div className="w-[90%] max-w-md bg-white rounded-2xl p-8 relative shadow-2xl border border-gray-200 transition-all">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <img src="/check.png" alt="Success Icon" className="w-20 h-20" />
          <h1 className="text-2xl font-semibold text-gray-800">
            Thanks for Applying
          </h1>
          <p className="text-gray-600 text-sm">
            We've received your submission and will be in touch soon!
          </p>
          <button
            onClick={onClose}
            className="text-blue-600 hover:text-white hover:bg-blue-500 text-sm border border-blue-500 px-4 py-2 rounded-2xl transition-colors hover:cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
