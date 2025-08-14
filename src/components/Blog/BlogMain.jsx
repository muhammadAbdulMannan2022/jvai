import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import { baseUri, useGetAllBlogQuery } from "../../redux/features/apiSlice";

const ITEMS_PER_PAGE = 5;

export default function BlogMain() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: blogData = [], isLoading } = useGetAllBlogQuery();

  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);
  const paginatedArticles = blogData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
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
              slug={article.slug || article.id}
              date={article.date || "Unknown date"}
              category={article.category || "General"}
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