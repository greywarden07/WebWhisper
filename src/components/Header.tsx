import Link from "next/link";
import React from "react";
import Profile from "./Profile";

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg z-50 backdrop-blur-md bg-opacity-80">
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-3xl font-extrabold text-white flex items-center transition-transform hover:scale-105">
                    <Link href="/">
                        <span className="cursor-pointer text-white text-2xl sm:text-3xl font-semibold tracking-wider">
                            WebWhisper
                        </span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden sm:flex items-center gap-6">
                    <Link
                        href="/features"
                        className="text-white text-lg hover:text-indigo-200 transition-all duration-200"
                    >
                        Features
                    </Link>
                    <Link
                        href="/about"
                        className="text-white text-lg hover:text-indigo-200 transition-all duration-200"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="text-white text-lg hover:text-indigo-200 transition-all duration-200"
                    >
                        Contact
                    </Link>
                </div>

                {/* Profile / Avatar */}
                <div className="relative">
                    <Profile />
                </div>
            </nav>
        </header>
    );
};

export default Header;
