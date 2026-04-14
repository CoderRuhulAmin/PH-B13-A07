import React, { useContext } from 'react';
import FriendCard from '../ui/FriendCard';
import { FriendContext } from '../context/FriendContext';


const FriendList = () => {

    const { filteredFriends, loading, statusFilter, handleFilterChange } = useContext(FriendContext);
    // console.log(friends);

    return (
        <section className='px-4 py-12'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-bold mb-5'>Your Friends</h2>
                    <div className="flex gap-3 mb-6">
                        <button
                            onClick={() => handleFilterChange('all')}
                            className={`btn ${statusFilter === 'all' ? 'btn-primary' : 'btn-outline'}`}
                        >
                            All
                        </button>

                        <button
                            onClick={() => handleFilterChange('on-track')}
                            className={`btn ${statusFilter === 'on-track' ? 'btn-success' : 'btn-outline'}`}
                        >
                            On Track
                        </button>

                        <button
                            onClick={() => handleFilterChange('almost due')}
                            className={`btn ${statusFilter === 'almost due' ? 'btn-warning' : 'btn-outline'}`}
                        >
                            Almost Due
                        </button>

                        <button
                            onClick={() => handleFilterChange('overdue')}
                            className={`btn ${statusFilter === 'overdue' ? 'btn-error' : 'btn-outline'}`}
                        >
                            Overdue
                        </button>
                    </div>
                </div>
                <div className="flex justify-center w-full py-10">
                    {
                        
                        loading && (
                            <span className="loading loading-spinner loading-lg text-success "></span>
                        )

                    }
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    {
                        filteredFriends.map(friend => <FriendCard key={friend.id} friend={friend} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default FriendList;