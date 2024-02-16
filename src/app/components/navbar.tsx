import React from "react";

const Navbar = () => {
  return (
    <header className=" bg-white/10 shadow-md flex items-center justify-between h-20">
      <h2 className=" text-white font-bold text-2xl flex">Authentication</h2>
      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <button className="btnLogin-popup">Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
