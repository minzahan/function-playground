import { useState } from "react";
import { unusedAlphabet } from "../functions/unusedAlphabet";

export default function UnusedAlphabetPage() {
  const [input, setInput] = useState(
    "A slow yellow fox crawls under the proactive dog"
  );
  const [result, setResult] = useState("");

  const handleRun = () => {
    setResult(unusedAlphabet(input));
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-center">Unused Alphabet</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full"
        rows={4}
      />
      <button
        onClick={handleRun}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Find Unused Letters
      </button>
      <div className="mt-2 font-mono bg-gray-100 p-4 rounded">
        Unused: <strong>{result}</strong>
      </div>
    </div>
  );
}
