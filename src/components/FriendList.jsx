import React from 'react';
import FriendCard from '../ui/FriendCard';

const FriendList = () => {
    return (
        <section className='px-4 py-12'>
            <div className='container mx-auto'>
                <h2 className='text-2xl font-bold mb-5'>Your Friends</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                </div>
            </div>
        </section>
    );
};

export default FriendList;