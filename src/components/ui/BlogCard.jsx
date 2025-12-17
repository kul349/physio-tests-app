// BlogCard.jsx
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
      <span className="text-xs text-blue-600 font-medium">{blog.category}</span>
      <h2 className="mt-2 text-lg font-semibold text-gray-800">{blog.title}</h2>
      <p className="mt-2 text-gray-600 text-sm">{blog.excerpt}</p>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <span>{blog.date}</span>
        <Link to={`/blog/${blog.slug}`} className="text-blue-600 font-medium">
          Read →
        </Link>
      </div>
    </article>
  );
}
