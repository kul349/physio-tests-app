import React from "react";
import { useTests } from "../hooks/useTestFilter";
import { Link } from "react-router-dom";

export default function TestDetailPage() {
  const { filtered, search, setSearch, loading, error } = useTests();

  if (loading) return <p className="text-center py-10">Loading tests...</p>;
  if (error)
    return <p className="text-center text-red-500 py-10">{error.message}</p>;

  return (
    <div className="mx-auto p-6 font-public bg-silver-1 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-dim-gray-5 mb-8">
        Physiotherapy Tests
      </h1>

      {/* Centered search bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search test name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-2/4 p-3 rounded-lg border border-dim-gray-5 text-base focus:outline-none focus:ring-2 focus:ring-silver-1"
        />
      </div>

      {/* Responsive grid for test items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((test) => (
          <div
            key={test.id}
            className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow space-y-2"
          >
            <h2 className="text-xl font-semibold text-blue-900">
              {test.test_name}
            </h2>
            <p className="text-gray-700 text-sm">
              <strong>Body area:</strong> {test.region}
            </p>
            <p className="text-gray-800 text-base">
              <strong>Purpose:</strong> {test.purpose}
            </p>
            <Link
              to={`/tests/${test.id}`}
              className="inline-block mt-2 text-blue-600 font-medium hover:underline"
            >
              View details →
            </Link>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-10 col-span-full">
            No tests found.
          </p>
        )}
      </div>

      <p className="text-xs text-gray-500 text-center mt-10">
        ⚠️ This information is for general patient education only. It does not
        replace professional medical advice.
      </p>
    </div>
  );
}
