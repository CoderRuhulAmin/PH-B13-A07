import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <wrapper>
            <header className='bg-base-200 shadow-sm sticky top-0 z-50'>
                <div className='container mx-auto'>
                    <Navbar />
                </div>
            </header>
            <Outlet />
            <footer className="bg-green-900 text-base-200">
                <div className="container mx-auto px-4 py-12">
                    <Footer />
                </div>
            </footer>
        </wrapper>
    );
};

export default Home;