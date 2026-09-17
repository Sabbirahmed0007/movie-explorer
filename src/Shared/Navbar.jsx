
import { Menu } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {


     const [theme, setTheme]= useState('light')
    
    
    
        useEffect(() => {
    
            const getTheme = localStorage.getItem('theme');
            setTheme(getTheme);
            document.documentElement.setAttribute('data-theme', getTheme)
            
        },[])
    
        const toggletheme = () => {
            const newtheme = theme === 'light' ? 'dark' : 'light';
    
            setTheme(newtheme);
            localStorage.setItem('theme', newtheme);
    
            document.documentElement.setAttribute('data-theme', newtheme);
    
    }
    

    const links = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-base font-bold bg-linear-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient":""}>Home</NavLink></li>
        <li><NavLink to={'/movies'} className={({ isActive }) => isActive ? "text-base font-bold bg-linear-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient" : ""}>Movies</NavLink></li>
       
    </>

    return (
        <div className='bg-base-300 px-3 shadow-2xl'>
            
            <div className='navbar  '>
                {/* Navbar left */}
                <div className='navbar-start'>
                    <h2 className="text-2xl font-bold">
                        Movie<span className="text-red-600">Explorer</span>
                    </h2>
                </div>

                <div className='navbar-center hidden lg:flex'>
                    <ul className='flex items-center gap-2'>
                        {links}
                    </ul>
                </div>

                <div className='navbar-end'>

                    {/* dark theme */}
                    <div>
                        <label className="toggle text-base-content">
                            <input type="checkbox" value={theme} className="theme-controller" onChange={toggletheme}
                            checked={theme === 'dark'} />

                            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                        </label>
                    </div>

                    {/* Menu */}
                    <div className='dropdown lg:hidden'>
                        <div >
                            <button className='btn btn-ghost' role='button' tabIndex={0}><Menu></Menu></button>
                        </div>
                        <div className='dropdown-content menu-sm w-56 shadow-2xl rounded-xl right-0 bg-base-300 z-40 mt-2 p-3 '>
                            <ul>
                                {links}
                            </ul>
                        </div>

                    </div>
                    
                </div>

            </div>

           
        </div>
    );
};

export default Navbar;