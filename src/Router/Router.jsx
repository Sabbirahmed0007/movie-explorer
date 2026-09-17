import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layout/MainLayout';
import ErrorElement from '../Pages/ErrorElement';
import Home from '../Pages/Home';
import AllMovies from '../Pages/AllMovies';
import MovieDetailsModal from '../Components/MovieDetailsModal';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/movies',
                element: <AllMovies></AllMovies>,
                loader: async () => {
                    const url = `https://api.tvmaze.com/shows`;

                    const res = await fetch(url);
                    const data = await res.json();
                    // console.log(data);
                    return data;                    
                    
                }
                
            },
            
        ]
        
   }
])

export default Router;