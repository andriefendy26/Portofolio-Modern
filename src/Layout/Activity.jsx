// import React, { useRef, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

export default function Activity() {
  // const canvasRef = useRef();

  // // Light mode colors for GitHub contribution graph
  // const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

  // // Data that matches the pattern from your image
  // const data = [
  //   // July - high activity at the beginning
  //   [0, 0, 0, 0, 0, 0, 0], // Week 1
  //   [0, 0, 0, 0, 0, 0, 0], // Week 2
  //   [0, 0, 0, 0, 0, 0, 0], // Week 3
  //   [0, 0, 0, 0, 0, 0, 0], // Week 4
  //   [0, 0, 0, 0, 0, 0, 0], // Week 5

  //   // August - continued activity
  //   [0, 0, 0, 0, 0, 2, 0], // Week 1
  //   [0, 0, 0, 3, 1, 0, 2], // Week 2
  //   [4, 1, 0, 0, 1, 1, 0], // Week 3
  //   [0, 3, 1, 1, 0, 2, 1], // Week 4

  //   // September - some activity
  //   [0, 0, 1, 0, 0, 0, 0], // Week 1
  //   [1, 1, 0, 1, 0, 0, 0], // Week 2
  //   [0, 0, 0, 0, 0, 0, 0], // Week 3
  //   [0, 0, 0, 0, 3, 1, 0], // Week 4

  //   // October - minimal activity
  //   [0, 0, 0, 1, 0, 0, 0], // Week 1
  //   [1, 2, 0, 0, 0, 0, 0], // Week 2
  //   [0, 0, 0, 0, 0, 0, 0], // Week 3
  //   [0, 0, 0, 0, 0, 0, 0], // Week 4
  //   [0, 0, 0, 1, 0, 0, 0], // Week 5

  //   // November - no activity
  //   [0, 0, 0, 0, 0, 0, 0], // Week 1
  //   [0, 0, 0, 0, 0, 0, 0], // Week 2
  //   [0, 0, 0, 0, 0, 0, 0], // Week 3
  //   [0, 0, 0, 0, 0, 0, 0], // Week 4

  //   // December - no activity
  //   [0, 0, 0, 0, 0, 0, 0], // Week 1
  //   [0, 0, 0, 0, 0, 0, 0], // Week 2
  //   [0, 0, 0, 0, 0, 0, 0], // Week 3
  //   [0, 0, 0, 0, 0, 0, 0], // Week 4
  //   [0, 0, 0, 0, 0, 0, 0], // Week 5

  //   // January - no activity
  //   [0, 0, 0, 0, 0, 0, 0], // Week 1
  //   [0, 0, 0, 0, 0, 0, 0], // Week 2
  //   [0, 0, 0, 0, 0, 0, 0], // Week 3
  //   [0, 0, 0, 0, 0, 0, 0], // Week 4

  //   // February - no activity
  //   [0, 0, 0, 0, 0, 0, 0], // Week 1
  //   [0, 0, 0, 0, 0, 0, 0], // Week 2
  //   [0, 0, 0, 0, 2, 0, 0], // Week 3
  //   [0, 0, 0, 0, 0, 0, 0], // Week 4

  //   // March - some activity
  //   [0, 0, 0, 0, 0, 0, 0], // Week 1
  //   [0, 0, 0, 0, 0, 0, 0], // Week 2
  //   [0, 0, 0, 0, 0, 0, 0], // Week 3
  //   [0, 0, 0, 0, 0, 0, 1], // Week 4
  //   [0, 0, 0, 0, 0, 0, 0], // Week 5

  //   // April - no activity
  //   [0, 0, 0, 0, 0, 0, 0], // Week 1
  //   [0, 0, 0, 0, 0, 0, 0], // Week 2
  //   [0, 0, 0, 0, 0, 0, 0], // Week 3
  //   [0, 0, 0, 0, 0, 0, 0], // Week 4

  //   // May - some activity
  //   [0, 0, 0, 0, 0, 0, 0], // Week 1
  //   [0, 0, 0, 0, 0, 0, 0], // Week 2
  //   [0, 0, 0, 0, 0, 0, 0], // Week 3
  //   [0, 0, 21, 4, 3, 2, 1], // Week 4
  //   [7, 0, 0, 0, 0, 0, 0], // Week 5

  //   // June - increased activity
  //   [0, 0, 0, 0, 0, 0, 0], // Week 1
  //   [0, 0, 4, 3, 1, 0, 13], // Week 2
  //   [6, 1, 5, 0, 1, 1, 2], // Week 3
  //   [2, 0, 1, 0, 1, 2, 1], // Week 4
  //   [1, 0, 0, 0, 0, 0, 0], // Week 5 - recent activity
  // ];

  // function getColor(count) {
  //   if (count === 0) return colors[0];
  //   if (count === 1) return colors[1];
  //   if (count === 2) return colors[2];
  //   if (count === 3) return colors[3];
  //   return colors[4];
  // }

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   // Set canvas size
  //   canvas.width = 800;
  //   canvas.height = 170;

  //   // Clear canvas with white background
  //   ctx.fillStyle = "#ffffff";
  //   ctx.fillRect(0, 0, canvas.width, canvas.height);

  //   // Configuration
  //   const cellSize = 11;
  //   const cellGap = 2;
  //   const startX = 60;
  //   const startY = 20;
  //   const months = [
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //   ];

  //   // Draw month labels
  //   ctx.fillStyle = "#586069";
  //   ctx.font =
  //     "12px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif";
  //   ctx.textAlign = "left";

  //   // Calculate month positions
  //   const monthPositions = [0, 5, 9, 13, 17, 22, 26, 30, 34, 38, 42, 47]; // approximate week positions
  //   months.forEach((month, index) => {
  //     const x = startX + monthPositions[index] * (cellSize + cellGap);
  //     ctx.fillText(month, x, 15);
  //   });

  //   // Draw day labels
  //   ctx.fillStyle = "#586069";
  //   ctx.font =
  //     "12px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif";
  //   ctx.textAlign = "right";

  //   const dayLabels = ["Mon", "Wed", "Fri"];
  //   dayLabels.forEach((day, index) => {
  //     const y = startY + 25 + index * 2 * (cellSize + cellGap);
  //     ctx.fillText(day, startX - 8, y + 8);
  //   });

  //   // Draw contribution squares
  //   data.forEach((week, weekIndex) => {
  //     week.forEach((dayCount, dayIndex) => {
  //       const x = startX + weekIndex * (cellSize + cellGap);
  //       const y = startY + 20 + dayIndex * (cellSize + cellGap);

  //       // Get color based on contribution count
  //       ctx.fillStyle = getColor(dayCount);

  //       // Draw rounded rectangle
  //       ctx.beginPath();
  //       ctx.roundRect(x, y, cellSize, cellSize, 2);
  //       ctx.fill();
  //     });
  //   });

  //   // Draw legend
  //   const legendX = canvas.width - 150;
  //   const legendY = canvas.height - 25;

  //   ctx.fillStyle = "#586069";
  //   ctx.font =
  //     "12px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif";
  //   ctx.textAlign = "left";
  //   ctx.fillText("Less", legendX - 30, legendY + 8);

  //   // Draw legend squares
  //   colors.forEach((color, index) => {
  //     const x = legendX + index * (cellSize + cellGap);
  //     ctx.fillStyle = color;
  //     ctx.beginPath();
  //     ctx.roundRect(x, legendY, cellSize, cellSize, 2);
  //     ctx.fill();
  //   });

  //   ctx.fillStyle = "#586069";
  //   ctx.fillText("More", legendX + 5 * (cellSize + cellGap) + 5, legendY + 8);
  // }, []);
  const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    // dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  };
  return (
    <div className="mt-10">
      <h2 className="edu-vic-wa-nt-hand text-6xl mb-5 text-center">Activity</h2>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Contribution Activity
          </h2>
          <p className="text-gray-600">A year of contributions on GitHub</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <GitHubCalendar username="andriefendy26" theme={explicitTheme} />
          {/* <canvas
            ref={canvasRef}
            className="w-full h-auto"
            style={{ maxWidth: "100%" }}
          /> */}
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p className="mb-2">
            <span className="font-medium">
              Learn how we count contributions:
            </span>
            <span className="ml-2">
              Contributions include commits, pull requests, issues, and code
              reviews.
            </span>
          </p>
          <p className="text-xs text-gray-500">
            This graph shows contribution activity over the past year, with
            darker green squares indicating more activity.
          </p>
        </div>
      </div>
    </div>
  );
}
