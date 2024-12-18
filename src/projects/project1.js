import React from "react";

function Project1() {
  return (
    <div className="bg-black text-white min-h-screen px-8 py-16">
      <h1 className="text-5xl font-bold mb-8 text-green-400">Project 1: DEVAN</h1>
      <p className="text-lg text-gray-400 mb-4">
        This project demonstrates my ability to build responsive UIs with React and Tailwind CSS.
      </p>

      {/* Images */}
      <div className="flex gap-4 mb-8">
        <img
          src="/assets/images/project1_img1.jpg"
          alt="Project Frame 1"
          className="w-1/2 rounded-lg"
        />
        <img
          src="/assets/images/project1_img2.jpg"
          alt="Project Frame 2"
          className="w-1/2 rounded-lg"
        />
      </div>

      {/* Technologies Used */}
      <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
      <div className="flex gap-4">
        <img src="/assets/icons/react.svg" alt="React" className="w-8 h-8" />
        <img src="/assets/icons/tailwind.svg" alt="Tailwind CSS" className="w-8 h-8" />
        <img src="/assets/icons/git.svg" alt="Git" className="w-8 h-8" />
      </div>
    </div>
  );
}

export default Project1;