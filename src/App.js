import React from "react";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navigation Bar */}
      <nav className="flex justify-center items-center py-6 border-b border-gray-800">
        <ul className="flex space-x-12 text-lg font-medium">
          {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((item) => (
            <li key={item} className="group relative cursor-pointer">
              <span className="group-hover:text-green-400 transition duration-300">
                {item}
              </span>
              <div className="absolute left-0 w-0 group-hover:w-full h-0.5 bg-green-400 transition-all duration-300"></div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-gray-800 via-black to-gray-800 py-16 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-6xl font-extrabold mb-4 leading-tight text-white">
            Welcome to My Work
          </h1>
          <p className="text-2xl text-gray-400 mb-6">
            Passionate Developer | Innovative Thinker
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-lg transition">
            See My Work
          </button>
        </div>

        {/* Image */}
        <div className="relative mt-8 md:mt-0 md:ml-8">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-8 border-green-400 overflow-hidden shadow-2xl">
            <img
              src="/assets/my_photo.jpg" /* Replace with your image */
              alt="Your Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Separator */}
      <div className="py-2">
        <hr className="border-t border-gray-700 mx-8" />
      </div>

      {/* Projects Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Project {index + 1}
              </h3>
              <p className="text-gray-400">
                A short description about the project. Built with React, Tailwind CSS, and more.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;