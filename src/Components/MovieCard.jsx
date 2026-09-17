import React, { useState } from 'react';
import {  CalendarDays, Star } from "lucide-react";
import { Link } from "react-router";
import MovieDetailsModal from './MovieDetailsModal';


const MovieCard = ({ movie }) => {
    // console.log(movie);

    const [showModal, setShowModal] = useState(false);

    const { id, url, name, type, language, rating, image, premiered  } = movie;
    
    return (
        <div>
            <div className="card bg-base-200 shadow-md ">
                <figure className="h-80">
                    <img
                        src={image?.medium}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title text-lg line-clamp-1">
                        {name}
                    </h2>

                    {/* Rating & Release Date */}
                    <div className="flex items-center justify-between text-sm">

                        <span className="flex items-center gap-1">
                            <Star
                                size={17}
                                className="fill-yellow-400 text-yellow-400"
                            />
                            {rating?.average}
                        </span>

                        <span className="flex items-center gap-1 opacity-70">
                            <CalendarDays size={16} />
                            {premiered}
                        </span>

                    </div>

                    {/* See Details */}
                    <div className="card-actions mt-3">
                        <button
                            role='button'
                            tabIndex={0}
                            onClick={()=>setShowModal(true)}
                            
                            className="btn btn-primary btn-sm w-full"
                        >
                            See Details
                        </button>
                    </div>
                    {/* Showing modal */}
                    <div className='' tabIndex={-1}>
                        {
                            showModal && <MovieDetailsModal onClose={() => setShowModal(false)}
                                movie={ movie}></MovieDetailsModal>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MovieCard;