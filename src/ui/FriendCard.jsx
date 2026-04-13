import React from 'react';

const FriendCard = () => {
    return (
        <div className="card bg-base-100 p-6 shadow-sm">
            <figure className="mb-3">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="w-20 h-20 rounded-full" />
            </figure>
            <div className="card-body p-0 items-center text-center">
                <h2 className="card-title">David Kim</h2>
                <p>62d ago</p>
                <div className="flex gap-4">
                    <div className="badge bg-green-200 text-green-800 font-semibold px-5 py-4 rounded-full">WORK</div>
                    <div className="badge bg-green-200 text-green-800 font-semibold px-5 py-4 rounded-full">FAMILY</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="badge bg-orange-400 text-base-200 px-6 py-5 rounded-full">Almost Due</div>
                </div>
            </div>
        </div>
    );
};

export default FriendCard;