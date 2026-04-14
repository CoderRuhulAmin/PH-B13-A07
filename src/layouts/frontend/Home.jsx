import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div>
            <header className='bg-base-200 shadow-sm sticky top-0 z-50'>
                <div className='container mx-auto'>
                    <Navbar />
                </div>
            </header>
            <main className='min-h-screen bg-gray-50 py-12'>
                <Outlet />
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