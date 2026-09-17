import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-5'>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            <main className='px-5 box-border min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;