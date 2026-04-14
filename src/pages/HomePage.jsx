import React from 'react';
import Banner from '../components/Banner';
import FriendList from '../components/FriendList';

const HomePage = () => {
    return (
        <main className='h-full bg-danger'>
            <Banner />
            <div className='border-t border-black/20'></div>
            <FriendList />
        </main>
    );
};

export default HomePage;