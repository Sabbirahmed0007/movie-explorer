import { CalendarDays, Star, X } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const MovieDetailsModal = ({ onClose, movie }) => {
    
    console.log(movie);

    const { id, url, name, type, language, rating, image, premiered, genres , summary, runtime}= movie
    
    
    return (
        <div className=' fixed inset-0 flex items-center justify-center bg-gray-950/60 z-50  p-5 '>
          
            <div className='bg-base-300 lg:w-11/12 mx-auto rounded-2xl p-4 relative h-110 overflow-auto shadow-2xl'>
                <div className='absolute w-15 h-15 p-2 rounded-full right-3 top-3  btn' onClick={onClose}>
                    <X ></X>
                </div>
                {/* Image */}
                <div>
                    <img className='w-full object-cover  rounded-xl' src={image?.original} alt={name} />
                </div>
                {/* title */}
                <div className=' my-3'>
                    <h1 className='text-2xl font-bold uppercase'>Title: {name }</h1>
                </div>

                {/* type language */}
                <div className='my-3 flex items-center justify-between'>
                    <p className='flex items-center justify-start '><span className='font-bold'>Type: </span>{type}</p>
                    <p className='flex items-center justify-end'><span className='font-bold'>Language :</span> { language}</p>
                </div>
                {/* Genres */}
                <div className='flex items-center justify-start gap-2 my-5'>
                   <span className='font-bold'> Genres :</span> {genres.map((genre) => (
              <span key={genre} className="badge badge-info badge-soft">
                {genre}
                        </span>
                    ))}
                </div>

                {/* Ratings and release */}
                <div className="flex items-center justify-between text-sm">

                    <span className="flex items-center gap-1">
                        <span className='font-semibold'>Ratings:</span> <Star
                        
                            size={17}
                            className="fill-yellow-400 text-yellow-400"
                        />
                        {rating?.average}
                    </span>

                    <span className="flex items-center gap-1 text-gray-400 uppercase">
                        <CalendarDays size={16} />
                      Released on :  {premiered}
                    </span>

                </div>

                <div className='my-3 text-gray-400'>
                    <span className='font-bold text-xl text-gray-500 '>Overview:</span>
                    <Markdown rehypePlugins={rehypeRaw}>{ summary}</Markdown>
                </div>
                <div>

                </div>

            </div>
        </div>
    );
};

export default MovieDetailsModal;