import React from 'react';
import { Film, Home, Search } from "lucide-react";
import { Link } from "react-router";


const ErrorElement = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-300 px-4">
            <div className="text-center max-w-lg">

                
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                        <Film
                            size={48}
                            className="text-primary"
                        />
                    </div>
                </div>
                <h1 className="text-8xl font-black text-primary">
                    404
                </h1>

                
                <h2 className="text-3xl font-bold mt-4">
                    Not Found!
                </h2>

                <div className="flex  justify-center gap-3 mt-8">

                    <Link
                        to="/"
                        className="btn btn-primary"
                    >
                        <Home size={18} />
                        Go Home
                    </Link>

                    <Link
                        to="/movies"
                        className="btn btn-outline"
                    >
                        <Search size={18} />
                        Explore Movies
                    </Link>

                </div>

               
            </div>
        </div>
    );
};

export default ErrorElement;