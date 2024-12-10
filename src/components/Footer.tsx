"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 text-sm mb-4 md:mb-0">
                        © 2024 WebWhisper. Developed by Greywarden. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="/privacy" className="text-gray-600 hover:text-gray-800 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-600 hover:text-gray-800 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

