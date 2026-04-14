import React from 'react';

const FriendCard = ({friend}) => {
    // console.log(friend);
    return (
        <div className="card bg-base-100 p-6 shadow-sm">
            <figure className="mb-3">
                <img
                    src={friend.picture}
                    alt={friend.name}
                    className="w-20 h-20 rounded-full" />
            </figure>
            <div className="card-body p-0 items-center text-center">
                <h2 className="card-title text-xl">{friend.name}</h2>
                <p>{friend.days_since_contact}days ago</p>
                <div className="flex gap-4">
                    {
                        friend.tags.map((tag, index) => {
                            return (
                                <div className="badge bg-green-200 text-green-800 font-semibold px-4 py-4 rounded-full" key={index}>{tag.toUpperCase()}</div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col gap-4">
                    <div className={`badge text-base-200 px-4 py-4 rounded-full ${
                        (friend.status === 'on-track') ? 'bg-green-900' 
                        :(friend.status === 'almost due') ? 'bg-orange-500' 
                        :(friend.status === 'overdue') ? 'bg-red-600' 
                        : 'bg-orange-200'}`
                        }>
                            {
                                friend.status === "on-track" ? "On Track" 
                                : friend.status === "almost due" ? "Almost Due" 
                                : friend.status === "overdue" ? "Overdue" 
                                : "No Status"
                            
                            }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendCard;