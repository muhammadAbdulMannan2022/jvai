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
    <div className="w-full bg-[#0a0a5e] py-3 px-4 overflow-x-auto flex items-center justify-center">
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border border-white hover:cursor-pointer
              ${
                activeCategory === category
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
