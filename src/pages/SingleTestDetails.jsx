import React from "react";
import {
  ChevronLeft,
  Play,
  Info,
  ClipboardCheck,
  UserCircle,
  AlertCircle,
  Video,
  ArrowRight,
  Search,
  BookOpen,
  ShieldAlert,
} from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useTests } from "../hooks/useTestFilter"; // Make sure this path is correct
import { Helmet } from "react-helmet-async";

// Helper to convert all YouTube links to embed with optional parameters
function getEmbedUrl(url) {
  if (!url) return null;
  let videoId = null;

  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  }
  if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0];
  }

  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
}

export default function SingleTestDetails() {
  const { slug } = useParams();
  const { tests, loading, error } = useTests();

  if (loading) return <p className="text-center py-10">Loading test...</p>;
  if (error)
    return <p className="text-center text-red-500 py-10">{error.message}</p>;

  // Safe optional chaining to prevent errors
  const test = tests?.find((t) => String(t.slug) === slug);
  if (!test)
    return <p className="text-center py-10 text-gray-500">Test not found</p>;


  const embedUrl = getEmbedUrl(test.youtube);

  return (
    <>
      <Helmet>
        <title>{test.test_name} Self Test at Home | Free Physio Test</title>
        <meta
          name="description"
          content={`Learn how to perform the ${test.test_name} safely at home and understand what your results mean.`}
        />
        <link
          rel="canonical"
          href={`https://physio-tests-app.vercel.app/tests/${test.slug}`}
        />

        <meta
          property="og:title"
          content={`${test.test_name} Self Test at Home`}
        />
        <meta
          property="og:description"
          content={`Learn how to perform the ${test.test_name} safely at home and understand what your results mean.`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://physio-tests-app.vercel.app/tests/${test.slug}`}
        />
        <meta
          property="og:image"
          content={test.thumbnail || "/default-thumbnail.jpg"}
        />
        <meta property="og:site_name" content="Free Physio Test" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${test.test_name} Self Test at Home`}
        />
        <meta
          name="twitter:description"
          content={`Learn how to perform the ${test.test_name} safely at home and understand what your results mean.`}
        />
        <meta
          name="twitter:image"
          content={test.thumbnail || "/default-thumbnail.jpg"}
        />

        {test.youtube && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: test.test_name,
              description: test.purpose,
              thumbnailUrl: [
                test.thumbnail ||
                  "https://physio-tests-app.vercel.app/default-thumbnail.jpg",
              ],
              uploadDate: test.uploadDate || new Date().toISOString(),
              contentUrl: `https://physio-tests-app.vercel.app/tests/${test.slug}`,
              embedUrl: getEmbedUrl(test.youtube),
              publisher: {
                "@type": "Organization",
                name: "Free Physio Test",
                logo: {
                  "@type": "ImageObject",
                  url: "https://physio-tests-app.vercel.app/logo.png",
                },
              },
            })}
          </script>
        )}
      </Helmet>

      <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
        {/* Top Navigation - Friendly Tone */}
        <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              to="/page/test-details"
              className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors text-sm font-semibold"
            >
              <ChevronLeft size={18} />
              <span>Back to Learning Library</span>
            </Link>
            <div className="flex items-center gap-2 text-emerald-600">
              <BookOpen size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">
                Patient Education
              </span>
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 mt-12">
          {/* Header - Simple & Explanatory */}
          <header className="mb-12">
            <div className="inline-block bg-emerald-50 text-emerald-700 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Focus Area: {test.region}
            </div>
            <h1 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Understanding the <br />
              <span className="text-emerald-600">{test.test_name}</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed border-l-4 border-emerald-100 pl-6 italic">
              "{test.purpose}"
            </p>
          </header>

          {/* Video Demonstration */}
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-4 text-slate-400">
              <Video size={18} />
              <h2 className="text-sm font-bold uppercase tracking-wider">
                Watch how it's done
              </h2>
            </div>
            <div className="rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200/50 border border-slate-100">
              {embedUrl ? (
                <div className="aspect-video relative">
                  <iframe
                    src={embedUrl}
                    title={test.test_name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              ) : (
                <div className="aspect-video flex flex-col items-center justify-center text-slate-400">
                  <Play size={40} className="mb-2 opacity-20" />
                  <p className="text-sm">Instructional video coming soon</p>
                </div>
              )}
            </div>
          </section>

          {/* Step-by-Step Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <UserCircle className="text-emerald-500" />
                How do I start?
              </h3>
              <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
                {test.starting_position}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <ClipboardCheck className="text-emerald-500" />
                What happens?
              </h3>
              <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
                {test.procedure}
              </p>
            </div>
          </div>

          {/* The Result - Plain English */}
          <section className="bg-dark-gray-1 text-white p-10 rounded-[2.5rem] mb-12 shadow-xl shadow-slate-200">
            <div className="flex items-center gap-2 text-emerald-400 mb-6">
              <Info size={20} />
              <h3 className="text-sm font-bold uppercase tracking-widest">
                In Plain English
              </h3>
            </div>
            <h4 className="text-2xl font-bold mb-4">
              What does a 'Positive' mean?
            </h4>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {test.positive_test_criteria}
            </p>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h5 className="text-xs font-bold text-emerald-400 uppercase mb-2">
                Helpful Tip:
              </h5>
              <p className="text-sm text-slate-400 leading-relaxed">
                {test.grading_or_notes}
              </p>
            </div>
          </section>

          {/* Safety First - Critical for Open Learning */}
          <section className="bg-rose-50 border border-rose-100 p-8 rounded-3xl mb-16">
            <div className="flex items-center gap-2 text-rose-600 mb-4">
              <ShieldAlert size={20} />
              <h3 className="font-bold text-lg">Safety First</h3>
            </div>
            <p className="text-sm text-rose-700 leading-relaxed">
              This guide is to help you understand what happens in a clinic.{" "}
              <strong>Do not try to diagnose yourself.</strong> If you have
              severe pain, swelling, or can't put weight on your leg, please
              visit an urgent care center or your doctor immediately.
            </p>
          </section>

          {/* Support Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 border-2 border-dashed border-slate-200 rounded-[2rem]">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-slate-900">
                Want to learn more about {test.region} health?
              </h4>
              <p className="text-sm text-slate-500">
                Check out our community-driven guides.
              </p>
            </div>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
              Browse All Guides
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-24 pt-12 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400 max-w-xl mx-auto leading-loose italic">
              This is an open learning resource designed to empower patients
              with knowledge. Information is updated regularly by our community
              of health advocates.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
