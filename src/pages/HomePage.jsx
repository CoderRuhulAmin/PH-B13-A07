import React from 'react';
import Banner from '../components/Banner';
import FriendList from '../components/FriendList';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <div className='border-t border-black/20'></div>
            <FriendList />
        </div>
    );
};

export default HomePage;