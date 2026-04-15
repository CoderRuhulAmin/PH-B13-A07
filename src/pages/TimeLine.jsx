import React, { useContext } from 'react';
import { FriendContext } from '../context/FriendContext';
import InteractionCard from '../ui/InteractionCard';

const TimeLine = () => {

    const { interactions, filter, setFilter } = useContext(FriendContext)
    // console.log(interactions)


    return (
        <section className='px-4'>
            <div className='container mx-auto'>
                <div className='mb-2'>
                    <h2 className='text-4xl font-bold'>Timeline Page </h2>
                </div>
                <div className="py-6 rounded-xl ">
                    <div className="flex justify-between items-center mb-4">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="select select-bordered text-[18px] w-44 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="all">All</option>
                            <option value="call">📞 Call</option>
                            <option value="text">💬 Text</option>
                            <option value="video">🎥 Video</option>
                        </select>
                    </div>

                    <div className="space-y-5 max-h-150 overflow-y-auto pr-2">
                        {interactions.map((item) => (
                            <InteractionCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimeLine;