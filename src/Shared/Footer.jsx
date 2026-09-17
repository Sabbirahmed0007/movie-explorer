import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            
            <footer className="bg-base-200 border-t border-base-300">
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        {/* Logo / App Name */}
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold">
                                Movie<span className="text-red-600">Explorer</span>
                            </h2>
                            <p className="text-sm opacity-70 mt-1">
                                Discover movies you'll love.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-ghost btn-circle"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-ghost btn-circle"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>

                            <a
                                href="mailto:your@email.com"
                                className="btn btn-ghost btn-circle"
                                aria-label="Email"
                            >
                                <FaMailBulk size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="divider"></div>

                    {/* Copyright */}
                    <div className="text-center text-sm opacity-70">
                        <p>
                            © 2026 MovieExplorer. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
           
        </div>
    );
};

export default Footer;