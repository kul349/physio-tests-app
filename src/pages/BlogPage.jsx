import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  BookOpen,
  Clock,
  ChevronRight,
  Hash,
  User,
} from "lucide-react";

import { blogs } from "../data/blog";


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
    <>
      <Helmet>
        <title>{`${blogs.title} | Physiotherapy Blog & Guides`}</title>
        <meta
          name="description"
          content={
            blogs.excerpt ||
            "Read evidence-based physiotherapy guides and clinical protocols."
          }
        />
        <link
          rel="canonical"
          href={`https://physio-tests-app.vercel.app/blog/${blogs.slug}`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={blogs.title} />
        <meta
          property="og:description"
          content={
            blogs.excerpt ||
            "Read evidence-based physiotherapy guides and clinical protocols."
          }
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://physio-tests-app.vercel.app/blog/${blogs.slug}`}
        />
        <meta
          property="og:image"
          content={blogs.thumbnail || "/default-blog-thumbnail.jpg"}
        />
        <meta property="og:site_name" content="Free Physio Blog" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogs.title} />
        <meta
          name="twitter:description"
          content={
            blogs.excerpt ||
            "Read evidence-based physiotherapy guides and clinical protocols."
          }
        />
        <meta
          name="twitter:image"
          content={blogs.thumbnail || "/img-slider-1.webp"}
        />

        {/* Author & Publisher */}
        <meta name="author" content={blogs.author || "Supra"} />
        <meta name="publisher" content="Physio App" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
        {/* Hero Header */}
        <header className="relative py-24 overflow-hidden bg-slate-50 border-b border-emerald-100/50">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.1] -z-10" />
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100/80 rounded-full border border-emerald-200">
                <BookOpen className="w-3.5 h-3.5" />
                Clinical Reference Library
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                Educational <span className="text-emerald-600">Blog</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
                Access {blogs.length} evidence-based guides, protocols, and
                research summaries for modern physiotherapy practice.
              </p>
            </motion.div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Controls Section */}
          <div className="flex flex-col xl:flex-row gap-8 items-center justify-between mb-16">
            {/* Search Bar */}
            <div className="relative w-full xl:max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-emerald-500 transition-colors" />
              <input
                type="text"
                placeholder="Search guides, authors or protocols..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-sm"
              />
            </div>

            {/* Categories Filter */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 w-full xl:w-auto no-scrollbar">
              <Filter className="text-slate-400 w-4 h-4 mr-2 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap border ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-200"
                      : "bg-white text-slate-500 border-slate-200 hover:border-emerald-300 hover:text-emerald-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog, index) => (
                <motion.article
                  layout
                  key={blog.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                  className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.12)] transition-all duration-500 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="p-8 pb-0">
                    <div className="flex justify-between items-start mb-6">
                      <span
                        className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white shadow-sm ${blog.color}`}
                      >
                        {blog.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {blog.readTime || "10 min read"}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight mb-4">
                      {blog.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-auto p-8 pt-0">
                    <div className="w-full h-px bg-slate-50 mb-6" />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                          <User className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-700 leading-none mb-1">
                            {blog.author || "Clinical Staff"}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">
                            {blog.date}
                          </span>
                        </div>
                      </div>
                      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-20 text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-sm mb-6">
                <Hash className="w-10 h-10 text-slate-200" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                No clinical guides found
              </h3>
              <p className="text-slate-500 max-w-sm mx-auto">
                We couldn't find any articles matching "{searchTerm}". Try a
                different term or browse categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-8 px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </main>

        {/* Stats Counter Section */}
        <section className="bg-emerald-600 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {[
              { label: "Guides", value: "50+" },
              { label: "Authors", value: "15+" },
              { label: "References", value: "200+" },
              { label: "Updates", value: "Weekly" },
            ].map((stat, i) => (
              <div key={i} className="text-center text-white">
                <div className="text-3xl md:text-4xl font-black mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-slate-900 py-24 px-6 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated on{" "}
              <span className="text-emerald-400">Clinical Protocols</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              Get the latest rehabilitation guides and educational content
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your professional email"
                className="flex-1 px-6 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-900/20">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-12 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} Clinical Physiotherapy Reference
              Library. All research-backed content.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
