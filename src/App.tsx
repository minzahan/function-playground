import { Routes, Route, Link } from "react-router-dom";
import AnimatePage from "./pages/AnimatePage";
import UnusedAlphabetPage from "./pages/UnusedAlphabetPage";
import { FunctionTile } from "./components/FunctionTile";

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
              <FunctionTile name="Animate Function" path="/animate" />
              <FunctionTile name="Unused Alphabet" path="/unused-alphabet" />
            </div>
          }
        />
        <Route path="/animate" element={<AnimatePage />} />
        <Route path="/unused-alphabet" element={<UnusedAlphabetPage />} />
      </Routes>
    </div>
  );
}
