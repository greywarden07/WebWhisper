import Link from "next/link";
import React from "react";
import Profile from "./Profile";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-green-400 to-blue-500 shadow-md">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-3xl font-bold text-white transition-transform hover:scale-105">
                    <Link href="/">
                        <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            WebWhisper
                        </span>
                    </Link>
                </div>
                <Profile />
            </nav>
        </header>
    );
};

export default Header;

