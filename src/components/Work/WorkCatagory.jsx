import React, { useState } from "react";

export default function CategoryFilter({
  categories = [
    "All Project",
    "UI UX Design",
    "Mobile App",
    "Web Development",
    "Digital Marketing",
    "Graphic Design",
  ],
  onCategoryChange,
}) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-950 to-purple-900 py-2 sm:py-3 px-2 sm:px-4 md:px-6 lg:px-8 overflow-x-hidden">
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-3 w-full max-w-6xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base font-medium transition-colors border border-white hover:cursor-pointer min-w-fit
              ${activeCategory === category
                ? "bg-white text-[#0a0a5e]"
                : "bg-transparent text-white hover:bg-white/10"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}