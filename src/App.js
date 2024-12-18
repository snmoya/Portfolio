import React from "react";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-8">
          <li className="hover:text-green-400 cursor-pointer">HOME</li>
          <li className="hover:text-green-400 cursor-pointer">ABOUT</li>
          <li className="hover:text-green-400 cursor-pointer">WORKS</li>
          <li className="hover:text-green-400 cursor-pointer">CONTACT</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center px-8 py-16">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-bold text-green-400 mb-4">
            Welcome to My Work:
          </h2>
          <p className="text-3xl md:text-4xl font-light mb-4">
          Passionate Developer | Innovative Thinker
          </p>
          <p className="text-lg text-gray-400">
            My name is Sebastian Moya, Computer Science graduate.
          </p>
          <p className="text-lg text-gray-400">
            I am passionate about front-end and mobile development.
          </p>
        </div>

        {/* Profile Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/assets/my_photo.jpg" /* Replace with your photo */
            alt="My Profile"
            className="w-64 h-64 rounded-full object-cover border-4 border-green-400"
          />
        </div>
      </div>

      {/* Separator */}
      <div className="py-2">
        <hr className="border-t border-gray-700 mx-8" />
      </div>

      {/* Projects Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          {Array.from({ length: 3 }).map((_, index) => (
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