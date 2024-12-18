import React from "react";

function Home() {
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
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/assets/images/my_photo.jpg"
            alt="My Profile"
            className="w-64 h-64 rounded-full object-cover border-4 border-green-400"
          />
        </div>
      </div>

      <div className="py-2">
        <hr className="border-t border-gray-700 mx-8" />
      </div>

      {/* Projects Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <div
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 cursor-pointer"
            onClick={() => window.location.href = "/project1"}
          >
            <h3 className="text-2xl font-semibold text-white p-4 bg-gray-900">
              Project 1: DEVAN
            </h3>
            <div className="flex gap-2 p-4">
              <img src="https://via.placeholder.com/300x200" alt="Frame 1" className="w-1/2 h-32 object-cover rounded-md" />
              <img src="https://via.placeholder.com/300x200" alt="Frame 2" className="w-1/2 h-32 object-cover rounded-md" />
            </div>
            <div className="flex justify-center gap-4 py-4">
              <img src="/assets/icons/react.svg" alt="React" className="w-8 h-8" />
              <img src="/assets/icons/tailwind.svg" alt="Tailwind CSS" className="w-8 h-8" />
              <img src="/assets/icons/git.svg" alt="Git" className="w-8 h-8" />
            </div>
          </div>
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

export default Home;