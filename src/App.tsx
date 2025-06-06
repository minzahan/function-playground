import { Routes, Route, Link } from "react-router-dom";
import AnimatePage from "./pages/AnimatePage";
import UnusedAlphabetPage from "./pages/UnusedAlphabetPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-24 bg-white text-gray-900">
      <Link to="/" className="text-3xl font-bold mb-12 hover:underline">
        Demo Tiles
      </Link>

      <Routes>
        <Route
          path="/"
          element={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/animate"
                className="p-8 rounded-xl shadow-md bg-green-100 hover:bg-green-200 transition"
              >
                Animate Function
              </Link>
              <Link
                to="/unused-alphabet"
                className="p-8 rounded-xl shadow-md bg-green-100 hover:bg-green-200 transition"
              >
                Unused Alphabet
              </Link>
            </div>
          }
        />
        <Route path="/animate" element={<AnimatePage />} />
        <Route path="/unused-alphabet" element={<UnusedAlphabetPage />} />
      </Routes>
    </div>
  );
}
