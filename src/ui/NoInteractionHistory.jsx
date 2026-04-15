import React from 'react';

const NoInteractionHistory = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="text-5xl">📭</div>
            <h2 className="text-xl font-semibold mt-3">
                No Interaction History
            </h2>
            <p className="text-gray-500 mt-1">
                Your interactions is empty right now.
            </p>
        </div>
    );
};

export default NoInteractionHistory;