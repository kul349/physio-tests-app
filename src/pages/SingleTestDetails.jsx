import { useParams, Link } from "react-router-dom";
import { useTests } from "../hooks/useTestFilter"; // Make sure this path is correct

// Helper to convert all YouTube links to embed with optional parameters
function getEmbedUrl(url) {
  if (!url) return null;

  let videoId = null;

  // youtu.be short link
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  }

  // normal watch?v= link
  if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0];
  }

  if (!videoId) return null;

  // Optional parameters to reduce tracking/cookie warnings
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
}

export default function SIngleTestDetails() {
  const { id } = useParams();
  const { tests, loading, error } = useTests();

  if (loading) return <p className="text-center py-10">Loading test...</p>;
  if (error)
    return <p className="text-center text-red-500 py-10">{error.message}</p>;

  // Safe optional chaining to prevent errors
  const test = tests?.find((t) => String(t.id) === id);
  if (!test)
    return <p className="text-center py-10 text-gray-500">Test not found</p>;

  const embedUrl = getEmbedUrl(test.youtube);

  return (
    <div className=" mx-auto p-6 min-h-screen bg-silver-1 items-center  ">
      <Link to="/" className="text-blue-600 hover:underline">
        ← Back to tests
      </Link>

      <h1 className="text-3xl font-bold text-blue-900 mt-4 mb-6">
        {test.test_name}
      </h1>

      <section className="space-y-4 text-gray-800">
        <p>
          <strong>Region:</strong> {test.region}
        </p>
        <p>
          <strong>Purpose:</strong> {test.purpose}
        </p>
        <p>
          <strong>Starting Position:</strong> {test.starting_position}
        </p>
        <p>
          <strong>Procedure:</strong> {test.procedure}
        </p>
        <p>
          <strong>Positive Test:</strong> {test.positive_test_criteria}
        </p>
        <p>
          <strong>Grading / Notes:</strong> {test.grading_or_notes}
        </p>
      </section>

      {embedUrl ? (
        <div className="mt-10 flex justify-center">
          <div className="relative w-full sm:w-3/4 md:2/3  aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={embedUrl}
              title={test.test_name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      ) : (
        <p className="text-gray-500 mt-6">
          Video not available.
          <a
            href={test.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >
            Watch on YouTube
          </a>
        </p>
      )}

      <p className="text-xs text-gray-500 mt-10">
        ⚠️ Educational content only. Not a substitute for professional care.
      </p>
    </div>
  );
}
