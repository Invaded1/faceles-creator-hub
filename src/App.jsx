import React, { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [ideas, setIdeas] = useState([]);

  const ideaBank = [
    "Top 5 YouTube Side Hustles with AI",
    "Faceless TikTok Motivation Reels",
    "Daily Routine of a Billionaire (Voiceover)",
    "Scary Facts That Will Blow Your Mind",
    "Reddit Horror Story Narration",
    "Time-lapse Quotes with Chill Music",
    "AI-Generated News Recaps",
    "Niche Explainers with Stock Footage",
    "Celebrity Net Worth Revealed",
    "Top Trending Tech of the Week"
  ];

  const generateIdeas = () => {
    const shuffled = ideaBank.sort(() => 0.5 - Math.random());
    setIdeas(shuffled.slice(0, 5));
  };

  return (
    <main className={`min-h-screen p-6 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Faceless Creator Hub</h1>
          <button
            className="px-4 py-2 border rounded"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Toggle Theme
          </button>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">What This Site Does</h2>
          <ul className="list-disc list-inside">
            <li>🎯 Trend tracking ideas</li>
            <li>🤖 Content idea generator</li>
            <li>⏱ Best posting times (coming soon)</li>
            <li>🧠 Automation strategies</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🔥 Get Content Ideas</h2>
          <button
            onClick={generateIdeas}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Generate 5 Ideas
          </button>
          <ul className="mt-4 space-y-2">
            {ideas.map((idea, index) => (
              <li key={index} className="border p-2 rounded bg-opacity-10">
                {idea}
              </li>
            ))}
          </ul>
        </section>

        <footer className="pt-4 text-sm opacity-70 border-t">
          Made by Invaded1 – No face, no fee, just content.
        </footer>
      </div>
    </main>
  );
}
