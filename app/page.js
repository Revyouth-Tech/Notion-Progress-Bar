"use client";

import { useEffect, useState } from "react";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  const [progressData, setProgressData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let pollingInterval;

    async function fetchData() {
      try {
        const response = await fetch("/api/progress");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProgressData(data);
      } catch (err) {
        console.error("Error fetching progress data:", err.message);
        setError("Failed to load progress data.");
      }
    }

    // Fetch data initially
    fetchData();

    // Set up polling every 10 seconds
    pollingInterval = setInterval(fetchData, 10000);

    // Clean up interval on component unmount
    return () => clearInterval(pollingInterval);
  }, []);

  return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Progress Tracker</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {progressData.length > 0 ? (
            progressData.map((item, index) => (
                <ProgressBar key={index} name={item.name} progress={item.progress} />
            ))
        ) : (
            !error && <p>Loading progress...</p>
        )}
      </div>
  );
}
