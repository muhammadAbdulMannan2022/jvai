import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center space-x-1 my-8">
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className={`px-3 py-1 rounded border ${
          currentPage > 1
            ? "hover:bg-gray-100"
            : "pointer-events-none opacity-50"
        }`}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded border ${
            currentPage === page
              ? "bg-blue-600 text-white border-blue-600"
              : "hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage >= totalPages}
        className={`px-3 py-1 rounded border ${
          currentPage < totalPages
            ? "hover:bg-gray-100"
            : "pointer-events-none opacity-50"
        }`}
      >
        &gt;
      </button>
    </div>
  );
}
