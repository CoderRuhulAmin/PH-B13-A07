import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { RiInstagramFill, RiTwitterXFill } from 'react-icons/ri';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className="flex flex-col items-center text-center space-y-4">
            {/* Brand */}
            <h2 className="text-3xl font-bold">
                <Link to="/">KeenKeeper</Link>
            </h2>
            {/* Description */}
            <p className="max-w-md text-sm opacity-80">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
            {/* Social title */}
            <h3 className="text-lg font-semibold mt-4">Social Links</h3>
            {/* Social icons */}
            <ul className="flex gap-6 text-2xl mt-2">
                <li><Link to={`#`}><RiInstagramFill /></Link></li>
                <li><Link to={`#`}><FaSquareFacebook /></Link></li>
                <li><Link to={`#`}><RiTwitterXFill /></Link></li>
            </ul>
            <div className="border-t border-white/20 w-full my-6"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80 w-full">
                <p className="text-center md:text-left">&copy; 2026 KeenKeeper. All rights reserved.</p>
                <div className="flex gap-6">
                    <span className="hover:text-white cursor-pointer transition">
                    Privacy Policy
                    </span>
                    <span className="hover:text-white cursor-pointer transition">
                    Terms of Service
                    </span>
                    <span className="hover:text-white cursor-pointer transition">
                    Cookies
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;