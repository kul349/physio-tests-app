import { useTests } from "../hooks/useTestFilter";
import { useState } from "react";
import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import {
  BookOpen,
  Activity,
  Stethoscope,
  Search,
  ArrowRight,
} from "lucide-react";

function TestDetailPage() {
  const { filtered, search, setSearch, loading, error } = useTests();
  const [visibleCount, setVisibleCount] = useState(20);
  const visibleTests = filtered.slice(0, visibleCount);
  const [prevSearch, setPrevSearch] = useState(search);

  if (search !== prevSearch) {
    setPrevSearch(search);
    setVisibleCount(20);
  }
  
  // ✅ Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Loading assessments...
      </div>
    );
  }

  // ✅ Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error.message || "Something went wrong"}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans">
      <div className="bg-white border-b borde-slate-200 pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center ">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Activity className="w-3 h-3" />
            Education Library
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Anatomy <span className="text-emerald-600">Guides</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Simple, easy-to-understand explanations of common physical
            assessments. Search for a body part or a specific test name below.
          </p>
          <div className="relative max-w-xl mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Try searching "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="flex items-center justify-between mb-8 ">
          <h2 className="text-xl font-bold text-slate-800">
            {search ? `Results for "${search}"` : "All Assessments"}
          </h2>
          <span className="text-slate-400 text-sm font-medium">
            {filtered.length} guides found
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTests.map((test) => (
            <Link
              key={test.id}
              to={`/tests/${test.id}`}
              className="group bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-500/30 hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-slate-50 text-[10px] font-black uppercase tracking-wider rounded-lg group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                    {test.region}
                  </span>
                  <div className="p-2 rounded-full bg-slate-50 text-slate-300 group-hover:text-emerald-500 transition-colors">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {test.test_name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                  {test.purpose}
                </p>
              </div>
              <div className="flex items-center text-emerald-600 font-bold text-sm">
                learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                No guides found
              </h3>
              <p className="text-slate-500">
                Try a different body part or keyword.
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 p-8 bg-white rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-slate-900">
              How to use this library
            </h4>
            <p className="text-sm text-slate-500">
              These guides are designed to help you understand what happens
              during a physical exam. Click on any test to see a video
              demonstration and a step-by-step breakdown.
            </p>
          </div>
        </div>
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 20)}
              className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
            >
              Load More
            </button>
          </div>
        )}

        <p className="text-[10px] text-slate-400 text-center mt-12 uppercase tracking-[0.2em] font-bold">
          ⚠️ Not for diagnostic use. Consult a doctor for any pain or symptoms.
        </p>
      </div>
    </div>
  );
}

export default TestDetailPage;
