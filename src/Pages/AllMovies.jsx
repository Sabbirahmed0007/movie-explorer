import React from 'react';
import { useLoaderData } from 'react-router';
import MovieCard from '../Components/MovieCard';

const AllMovies = () => {

    const movies = useLoaderData();

    console.log(movies);
    


    return (
        <div>
            <div><title>Movie Explorer : All Movies</title></div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4'>
                {movies.map(movie => <MovieCard movie={ movie} key={movie.id}></MovieCard>)}
            </div>
        </div>
    );
};

export default AllMovies;