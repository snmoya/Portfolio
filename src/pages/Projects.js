import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="bg-black text-white min-h-screen px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/projects/project1">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold text-green-400">Project 1</h2>
            <p className="text-gray-400">A brief description of Project 1.</p>
          </div>
        </Link>

        <Link to="/projects/project2">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold text-green-400">Project 2</h2>
            <p className="text-gray-400">A brief description of Project 2.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;