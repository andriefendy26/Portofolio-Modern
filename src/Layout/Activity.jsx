// import React, { useRef, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

export default function Activity() {
  
  const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
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

        {/* <div className="mt-4 text-sm text-gray-600">
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
        </div> */}
      </div>
    </div>
  );
}
