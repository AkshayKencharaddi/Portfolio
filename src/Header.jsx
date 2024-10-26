import React from 'react';

const Header = () => (
  <header className="fixed w-full bg-yellow-200">
    <nav className="container mx-auto flex justify-between p-4">
      <h1 className="text-2xl font-bold text-green-800">MyPortfolio</h1>
      <ul className="flex space-x-4 text-1xl text-green-800">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
