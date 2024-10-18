import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
<nav className='bg-blue-500'>
    <div className="flex items-center justify-between p-4 w-[80%] mx-auto  text-white ">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <h1>Logo</h1>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex space-x-4 gap-7">
          <li className="hover:text-blue-200 transition duration-300 cursor-pointer">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-blue-200 transition duration-300 cursor-pointer">
          <Link href={"/about"}>About</Link>
          </li>
          <li className="hover:text-blue-200 transition duration-300 cursor-pointer">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Login Button */}
      <div>
        <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200 transition duration-300">
          Login
        </button>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
