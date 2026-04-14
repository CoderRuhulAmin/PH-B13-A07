import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoMdTime } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li>
            <NavLink 
                to={'/'} 
                className={({ isActive }) => `flex items-center gap-2 font-semibold px-3 py-2 rounded-md transition ${ isActive ? "bg-green-900 text-base-200" : "hover:bg-green-100"}`} >
                <IoHomeOutline size={16} /> Home
            </NavLink>
        </li>
        <li>
            <NavLink 
                to={'/timeline'} 
                className={({ isActive }) => `flex items-center gap-2 font-semibold px-3 py-2 rounded-md transition ${ isActive ? "bg-green-900 text-base-200" : "hover:bg-green-100"}`} >
                <IoMdTime size={16} /> Timeline
            </NavLink>
        </li>
        <li>
            <NavLink 
                to={'/stats'} 
                className={({ isActive }) => `flex items-center gap-2 font-semibold px-3 py-2 rounded-md transition ${ isActive ? "bg-green-900 text-base-200" : "hover:bg-green-100"}`} >
                <ImStatsDots size={16} /> Stats
            </NavLink>
        </li>
    </>

    return (
        <div className="max-lg:collapse w-full rounded-md">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <h2 className="text-2xl text-green-900 font-bold"><Link to={'/'}>KeenKeeper</Link></h2>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        {links}
                    </ul>
                </div>
            </div>

            <div className="collapse-content lg:hidden z-10">
                <ul className="menu">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;