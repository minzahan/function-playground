import { useState } from "react";
import { animate } from "../functions/animate";

export default function AnimatePage() {
  const [input, setInput] = useState("RR..LRL");
  const [speedInput, setSpeedInput] = useState("3");
  const [result, setResult] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleRun = () => {
    const speed = parseInt(speedInput, 10);
    if (!isNaN(speed) && speed > 0) {
      setError("");
      setResult(animate(input, speed));
    } else {
      setError("Speed must be a number greater than 0");
    }
  };

  return (
    <div className="p-12 max-w-10xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Particle Animation</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-lg mb-2">Initial Position</label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter pattern (e.g. ..RR..LL.)"
              className="border p-3 w-full text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative pb-8">
            <label className="block text-lg mb-2">Speed</label>
            <input
              className="appearance-none border border-gray-300 rounded-lg px-4 py-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={speedInput}
              onChange={(e) => setSpeedInput(e.target.value)}
              placeholder="Enter speed"
            />
            <div className="absolute left-0 mt-1">
              {error && <p className="text-red-500 text-base">{error}</p>}
            </div>
          </div>
          <button
            onClick={handleRun}
            className="w-full bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Animate
          </button>
        </div>
        <div className="font-mono bg-gray-100 p-6 rounded-lg text-lg h-full">
          <div className="space-y-2">
            {result.map((line, i) => (
              <div key={i} className="tracking-wider">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
