import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Header = () => {
    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'hover:text-blue-600 transition-colors'}>Home</NavLink></li>
            <li><NavLink to="/apps" className={({ isActive }) => isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'hover:text-blue-600 transition-colors'}>Apps</NavLink></li>
            <li><NavLink to="/installation" className={({ isActive }) => isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'hover:text-blue-600 transition-colors'}>My Installation</NavLink></li>
        </>
    );

    return (
        <header className="navbar bg-white shadow-sm px-4 md:px-8 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
                    <img src={logo} alt="AppVerse Logo" className="w-8 h-8" />
                    <span className="text-gray-800">AppVerse</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6 font-medium text-gray-600">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a
                    href="https://github.com/Musfikajahan/HeroApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl px-6 py-3 text-white font-semibold
               bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]
               shadow-md hover:shadow-lg transition-all duration-300
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7C3AED]"
                >
   
                    <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-white/20">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                            <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.85 9.68.5.1.69-.22.69-.49 0-.24-.01-.87-.01-1.7-2.79.62-3.38-1.37-3.38-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.23-.26-4.57-1.14-4.57-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .85-.28 2.79 1.05a9.3 9.3 0 0 1 5.08 0c1.94-1.33 2.79-1.05 2.79-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.95-2.35 4.82-4.59 5.07.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                        </svg>
                    </span>
                    Contribute
                </a>
            </div>
        </header>
    );
};

export default Header;

