// BlogDetails.jsx
import { useParams } from "react-router-dom";
import { blogs } from "../data/blog";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-gray-800">{blog.title}</h1>
      <p className="mt-2 text-sm text-gray-500">
        {blog.category} • {blog.date} • {blog.author}
      </p>

      <div className="prose prose-blue mt-6">
        <p>{blog.content}</p>

        {blog.references && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold">References</h2>
            <ul className="list-disc pl-5">
              {blog.references.map((ref, i) => (
                <li key={i}>
                  <a
                    href={ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    {ref}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
