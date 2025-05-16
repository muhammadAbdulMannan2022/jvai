import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import Filters from "./filters";
import HeroReUseable from "../../Helpers/HeroReUseable";

// Simulated articles (with category added)
const articles = [
  {
    id: 1,
    date: "JUNE 15, 2023",
    title: "The Art of UX/UI Design",
    category: "UI UX Design",
    description: "Learn how to create intuitive digital products...",
    image: "/Blog/b1.png",
    slug: "the-art-of-uxui-design",
  },
  {
    id: 2,
    date: "MAY 22, 2023",
    title: "Building the Face of Your Digital Presence",
    category: "Web Development",
    description: "Your website is often the first impression...",
    image: "/Blog/b2.png",
    slug: "building-digital-presence",
  },
  {
    id: 3,
    date: "APRIL 10, 2023",
    title: "The Business of Mobile Applications",
    category: "Mobile App",
    description: "Mobile apps have transformed how businesses connect...",
    image: "/Blog/b3.png",
    slug: "business-mobile-applications",
  },
  {
    id: 4,
    date: "MARCH 5, 2023",
    title: "AI Implementation: Transforming Ideas into Intelligent Solutions",
    category: "Digital Marketing",
    description: "Artificial intelligence is revolutionizing...",
    image: "/Blog/b4.png",
    slug: "ai-implementation",
  },
  {
    id: 5,
    date: "FEBRUARY 12, 2023",
    title: "Graphic Design Trends to Watch in 2023",
    category: "Graphic Design",
    description:
      "Explore the latest design styles and visual trends shaping the creative industry this year.",
    image: "/Blog/b4.png",
    slug: "graphic-design-trends-2023",
  },
  {
    id: 6,
    date: "JANUARY 18, 2023",
    title: "Optimizing Web Performance for Better UX",
    category: "Web Development",
    description:
      "Speed matters. Learn techniques to boost website performance and improve user satisfaction.",
    image: "/Blog/b2.png",
    slug: "optimizing-web-performance",
  },
  {
    id: 7,
    date: "DECEMBER 30, 2022",
    title: "Mobile-First Design: Best Practices and Tools",
    category: "Mobile App",
    description:
      "Designing for mobile before desktop helps reach users effectively. Discover why and how.",
    image: "/Blog/b1.png",
    slug: "mobile-first-design",
  },
  {
    id: 8,
    date: "NOVEMBER 15, 2022",
    title: "Designing with Accessibility in Mind",
    category: "UI UX Design",
    description:
      "Make your designs inclusive and user-friendly for everyone, regardless of ability.",
    image: "/Blog/b3.png",
    slug: "accessible-design-principles",
  },
  {
    id: 9,
    date: "OCTOBER 20, 2022",
    title: "How to Build an Effective Landing Page",
    category: "Digital Marketing",
    description:
      "A great landing page can make or break your campaign. Learn key components that convert.",
    image: "/Blog/b2.png",
    slug: "effective-landing-page",
  },
  {
    id: 10,
    date: "SEPTEMBER 12, 2022",
    title: "Crafting Brand Identity Through Design",
    category: "Graphic Design",
    description:
      "Visual identity matters. Learn how to use design to build a strong brand presence.",
    image: "/Blog/b1.png",
    slug: "brand-identity-design",
  },
  {
    id: 11,
    date: "AUGUST 8, 2022",
    title: "Integrating SEO into Web Development",
    category: "Web Development",
    description:
      "SEO isn’t just content. Discover how developers can enhance visibility from the ground up.",
    image: "/Blog/b1.png",
    slug: "seo-in-web-dev",
  },
  {
    id: 12,
    date: "JULY 25, 2022",
    title: "The Rise of Voice Interfaces in UX",
    category: "UI UX Design",
    description:
      "Voice technology is changing how users interact. Learn how to design for this shift.",
    image: "/Blog/b2.png",
    slug: "voice-interface-ux",
  },
  {
    id: 13,
    date: "JUNE 10, 2022",
    title: "Mastering ASO: App Store Optimization Tips",
    category: "Mobile App",
    description:
      "Boost your app downloads with smart strategies tailored for app marketplaces.",
    image: "/Blog/b3.png",
    slug: "app-store-optimization",
  },
  {
    id: 14,
    date: "MAY 3, 2022",
    title: "Email Marketing Design That Converts",
    category: "Digital Marketing",
    description:
      "Good emails = high conversions. Learn layout, copy, and CTAs that drive action.",
    image: "/Blog/b4.png",
    slug: "email-marketing-design",
  },
];

const categories = [
  "All",
  "UI UX Design",
  "Mobile App",
  "Web Development",
  "Digital Marketing",
  "Graphic Design",
];

const ITEMS_PER_PAGE = 5;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // fake delay
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroReUseable
        bgImag={"/Blog/.png.png"}
        title={
          <>
            Stay Updated with Our Latest{" "}
            <span className="text-blue-500">
              News, <br /> Insights, and Industry
            </span>{" "}
            Trends{" "}
          </>
        }
      />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Filters
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />

        {loading ? (
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
              <ArticleCard key={article.id} {...article} />
            ))}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </main>
  );
}
