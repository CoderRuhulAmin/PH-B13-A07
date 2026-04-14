import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const ErrorPage = ({status = "404", message = "Page Not Found"}) => {
    const Navigate = useNavigate();
    return (
        <div>
            <header className='bg-base-200 shadow-sm sticky top-0 z-50'>
                <div className='container mx-auto'>
                    <Navbar />
                </div>
            </header>
            <main className='min-h-screen bg-gray-50 py-12'>
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center justify-center">
                        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                            <h1 className="text-9xl font-extrabold text-red-500">{status}</h1>
                            <p className="text-2xl mt-4 text-gray-700">{message}</p>
                            <button
                                className="mt-6 btn btn-primary"
                                onClick={() => Navigate('/')}
                            >
                                Go Back Home
                            </button>
                        </div>
                    </div>
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

export default ErrorPage;