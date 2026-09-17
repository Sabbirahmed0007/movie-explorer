import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import MovieCard from '../Components/MovieCard';
import { Home, Search } from 'lucide-react';

const AllMovies = () => {

    const movies = useLoaderData();

    const [title, setTitle] = useState('');
    const [updatedMovies, setUpdatedMovies]=useState(movies)
   

    
    
    
    const handleSearch = async(e) => {
        e.preventDefault();

        const getMovies = movies.filter(movie => movie.name.toLowerCase().includes(title.toLowerCase()))
        setUpdatedMovies(getMovies)
    }
    


    return (
        <div>
            <div><title>Movie Explorer : All Movies</title></div>
            
            {/* Search movie by name */}
            <div className='my-10'>
                <form action="" onSubmit={handleSearch} className='flex items-center'>
                    <input type="text" className=' p-3 bg-base-300 w-full outline-0 rounded-l-xl' onChange={(e)=> setTitle(e.target.value)} placeholder='Name of the movie' />
                    <button className='btn bg-red-500 py-6 rounded-r-xl text-white' type='submit'>Search</button>
                </form>
            </div>
            <div className='my-2 '>
                <span className='font-bold'>Total:</span> {updatedMovies.length}
            </div>

            
            <div>
                {
                    updatedMovies.length === 0 && <div className='flex flex-col items-center justify-center text-center h-60'>
                        <h1 className='text-2xl font-bold font-comic text-red-500'>No movie found</h1>
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
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4'>
                {updatedMovies.map((movie, index) => <MovieCard movie={ movie} key={index}></MovieCard>)}
            </div>
        </div>
    );
};

export default AllMovies;