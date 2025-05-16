import { useState } from "react";

export default function Filters({ categories, onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="w-full py-3 px-4 overflow-x-auto flex flex-col items-center justify-center">
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors delay-50 hover:cursor-pointer ${
              activeCategory === category
                ? "bg-blue-800 text-white"
                : "bg-gray-100 text-blue-950"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
