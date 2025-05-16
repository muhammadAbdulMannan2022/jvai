import React, { useState } from "react";
import HeroReUseable from "../../Helpers/HeroReUseable";
import WorkCatagory from "./WorkCatagory";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All Project");

  const handleCategoryChange = (category) => {
    console.log("Selected category:", category);
    setSelectedCategory(category);
  };
  return (
    <div className="w-full">
      <div className="w-full h-[80vh] bg-radial from-blue-900 via-blue-950 to-black bg-bottom px-40">
        <div className="bg-[url(/work.png)] h-full w-full bg-no-repeat bg-contain bg-center flex items-center justify-center">
          <h1 className="text-7xl font-bold text-white text-center">
            Turning{" "}
            <span className="text-blue-500">
              Unique <br /> Concepts
            </span>{" "}
            into Powerful <br /> Products
          </h1>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <WorkCatagory onCategoryChange={handleCategoryChange} />
      </div>
    </div>
  );
}
