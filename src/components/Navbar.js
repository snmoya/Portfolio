import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-8">
        <li className="hover:text-green-400 cursor-pointer">HOME</li>
        <li className="hover:text-green-400 cursor-pointer">ABOUT</li>
        <li className="hover:text-green-400 cursor-pointer">WORKS</li>
        <li className="hover:text-green-400 cursor-pointer">CONTACT</li>
      </ul>
    </nav>
  );
}

export default Navbar;