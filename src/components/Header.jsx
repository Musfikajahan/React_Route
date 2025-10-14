import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : ''}>Home</NavLink></li>
            <li><NavLink to="/apps" className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : ''}>Apps</NavLink></li>
            <li><NavLink to="/installation" className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : ''}>Installation</NavLink></li>
        </>
    );

    return (
        <header className="navbar bg-base-100 shadow-md px-4 md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="AppVerse Logo" className="w-8 h-8" />
                    AppVerse
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="btn bg-gray-800 text-white hover:bg-gray-700">
                    Contribution
                </a>
            </div>
        </header>
    );
};

export default Header;
