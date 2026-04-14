import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import FriendList from '../components/FriendList';

const HomePage = () => {
    return (
        <>
            <Banner />
            <section className='px-4'>
                <div className='container mx-auto'>

                    <div className='border-t border-black/20'></div>

                </div>
            </section>
            <FriendList />
        </>
    );
};

export default HomePage;