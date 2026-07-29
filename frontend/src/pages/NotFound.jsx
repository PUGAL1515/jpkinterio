import { Link } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-white via-red-50 to-gray-100 px-6">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="text-center lg:text-left">

          <span className="inline-flex items-center px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold tracking-wider uppercase">
            Oops! Page Not Found
          </span>

          

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
            Looks like you're lost.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            The page you're looking for doesn't exist, may have been moved,
            renamed, or is temporarily unavailable.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">

            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-semibold shadow-lg transition duration-300"
            >
              <Home size={20} />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-red-500 hover:text-red-600 px-7 py-4 rounded-xl font-semibold transition"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="relative flex justify-center">

          <div className="absolute w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-70"></div>

          <div className="relative bg-white shadow-2xl rounded-3xl p-12 border border-red-100">

            <SearchX
              size={170}
              className="text-red-600 mx-auto"
              strokeWidth={1.5}
            />

            <p className="mt-6 text-center text-gray-600 text-lg">
              Sorry, we couldn't find the page you were looking for.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}