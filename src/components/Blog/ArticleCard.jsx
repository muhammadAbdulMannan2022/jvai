import { Link } from "react-router";
import { FaRegCalendarAlt } from "react-icons/fa";
export default function ArticleCard({ date, title, description, image, id }) {
  return (
    <div className="flex flex-col gap-6 shadow mt-10 rounded-xl">
      <div className="w-full">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full max-h-[400px] object-cover rounded-md"
        />
      </div>
      <div className="w-2/3 p-8">
        <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
          <span>
            <FaRegCalendarAlt />
          </span>
          {date}
        </p>
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link
          to={`/blog/${id}`}
          state={{ blog: { date, title, image, description, id } }}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
