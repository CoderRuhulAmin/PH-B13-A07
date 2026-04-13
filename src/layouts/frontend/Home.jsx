import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div>
            <header className='bg-base-200 shadow-sm sticky-top top-0'>
                <div className='container mx-auto'>
                    <Navbar />
                </div>
            </header>
            <main className='h-full bg-danger'>
                <div className='container mx-auto px-4 py-12'>
                    <Outlet />
                </div>
            </main>
            <footer className="bg-green-900 text-base-200">
                <div className="container mx-auto px-4 py-12">
                    <Footer />
                </div>
            </footer>
        </div>
    );
};

export default Home;