// BlogPage.jsx
import { useState } from "react";
import { blogs } from "../data/blog";
import BlogCard from "../components/ui/BlogCard";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  const filteredBlogs = blogs
    .filter(
      (blog) => selectedCategory === "All" || blog.category === selectedCategory
    )
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section className=" mx-auto px-4 py-10 bg-gainsboro-1">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-semibold text-dim-gray-5">
          Educational Blog
        </h1>
        <p className="mt-2 text-dim-gray-4">
          Relevant physiotherapy guides and protocols
        </p>
      </header>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition
              ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-dim-gray-4 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-dim-silver-1">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <p className="mt-8 text-center text-gray-500">No articles found.</p>
      )}
    </section>
  );
}
