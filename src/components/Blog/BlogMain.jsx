import React, { useState, useEffect } from "react";
import Filters from "./filters";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import { baseUri, useGetAllBlogQuery, useGetOneBlogQuery } from "../../redux/features/apiSlice";

const categories = [
  "All",
  "UI UX Design",
  "Mobile App",
  "Web Development",
  "Digital Marketing",
  "Graphic Design",
];

const ITEMS_PER_PAGE = 5;

export default function BlogMain() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: blogData = [], isLoading } = useGetAllBlogQuery();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // If your blogData includes categories, filter them
  const filteredArticles =
    selectedCategory === "All"
      ? blogData
      : blogData.filter(
        (article) => article.category === selectedCategory
      );

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Filters categories={categories} onCategoryChange={handleCategoryChange} />

      {isLoading ? (
        <div className="text-center py-10 text-gray-500 text-lg font-medium h-[80vh]">
          Loading...
        </div>
      ) : paginatedArticles.length === 0 ? (
        <div className="text-center py-10 text-gray-500 text-lg font-medium">
          No blog posts found.
        </div>
      ) : (
        <>
          {paginatedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.short_description}
              image={baseUri + article.picture}
              slug={article.slug || article.id} // Adjust as per your backend
              date={article.date || "Unknown date"} // Adjust if `date` exists
              category={article.category || "General"} // if available
            />
          ))}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
