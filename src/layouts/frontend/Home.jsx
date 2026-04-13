import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../assets/components/Navbar';

const Home = () => {
    return (
        <div>
            <header className='bg-base-200 shadow-sm sticky-top top-0'>
                <div className='container mx-auto'>
                    <Navbar />
                </div>
            </header>
            <main className='h-full bg-danger'>
                <div className='container mx-auto'>
                    <Outlet />
                </div>
            </main>
            <footer>
                <h2>Footer Section</h2>
            </footer>
        </div>
    );
};

export default Home;