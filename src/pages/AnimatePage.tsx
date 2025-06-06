import { useState } from "react";
import { animate } from "../functions/animate";

export default function AnimatePage() {
  const [input, setInput] = useState("RR..LRL");
  const [speed, setSpeed] = useState(3);
  const [result, setResult] = useState<string[]>([]);

  const handleRun = () => {
    setResult(animate(input, speed));
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Particle Animation</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Initial position (e.g. ..RR..LL.)"
        className="border p-2 w-full"
      />
      <input
        className="appearance-none border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        placeholder="Enter speed"
      />
      <button
        onClick={handleRun}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Animate
      </button>
      <div className="space-y-1 font-mono bg-gray-100 p-4 rounded">
        {result.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}
