import React from 'react';
import {Link} from "react-router";

const Herobanner = () => {
    return (
        <div
            className="relative min-h-150 bg-cover bg-center"
            style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
                }}
            >
               
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex min-h-150 mx-auto items-center text-center">
                    <div className="mx-auto w-full max-w-7xl px-6">
                        <div className="max-w-2xl text-white mx-auto">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                                Welcome to
                            </p>

                            <h1 className="text-5xl font-bold leading-tight md:text-7xl uppercase">
                                Movie verse
                            </h1>

                            <p className="mt-5 text-lg leading-relaxed text-gray-300 md:text-xl">
                                Discover your next favorite movie. Explore thousands
                                of movies, find detailed information, and keep track
                                of the films you love.
                            </p>

                            <Link
                                to="/movies"
                                className="mt-8 inline-block rounded-lg bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
                            >
                                Explore Movies
                            </Link>

                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Herobanner;