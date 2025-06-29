import React, { useState } from 'react';
import { navItems } from '../constants/content';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [bars, setBars] = useState(false);
  const toggleNavbar = () => setBars(!bars);

  const totalQuantity = useSelector((state) => state.reducer.totalQuantity);

  return (
    <nav className='fixed flex w-full items-center justify-center top-4 z-50 bg-white'>
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center px-10">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src="logo.png" alt="Logo" className="w-35 h-20" />
          </div>

          {/* Desktop Nav Items */}
          <ul className='hidden lg:items-center lg:flex ml-14 space-x-12'>
            {navItems.map((item, index) => (
              <li key={index} className='hover:border-b font-semibold hover:text-purple-500 relative'>
                <NavLink to={item.href} className="relative flex items-center justify-center">
                  {item.label}
                  {item.href === "/cart" && totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {totalQuantity}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a href="#" className='py-2 px-3 border rounded-md'>Log In</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {bars ? <IoMdClose /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {bars && (
          <div className='font-verdana fixed right-0 z-20 bg-neutral-400 backdrop-blur-sm w-full p-12 flex flex-col justify-center items-center lg:hidden'>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-2 my-4 hover:border-b font-semibold relative'>
                  <NavLink to={item.href} className="relative flex items-center justify-center">
                    {item.label}
                    {item.href === "/cart" && totalQuantity > 0 && (
                      <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                        {totalQuantity}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className='flex space-x-6 mt-5'>
              <a href="#" className='py-2 px-3 rounded-md border'>Log In</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
