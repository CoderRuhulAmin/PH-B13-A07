import { MdHistory } from 'react-icons/md';
import InteractionCard from '../ui/InteractionCard';
import { useContext } from 'react';
import { FriendContext } from '../context/FriendContext';
import { Link } from 'react-router';


const RecentInteractions = () => {

    const {interactions} = useContext(FriendContext)
    // console.log(interactions)

    const limitedInteractions = interactions.slice(0, 5);

    return (
        <div className="bg-base-100 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl text-green-600 font-semibold">Recent Interactions</h2>
                <Link to={"/timeline"}>
                    <button className="btn btn-sm btn-outline btn-primary font-medium">
                        <MdHistory size={16} /> Full History
                    </button>
                </Link>
            </div>

            <div className="space-y-4">
                {limitedInteractions.map((item) => (
                    <InteractionCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default RecentInteractions;