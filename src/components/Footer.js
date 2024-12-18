import React from "react";

function Footer() {
  return (
    <footer className="py-6 bg-gray-800 text-center text-gray-400">
      <p>© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;