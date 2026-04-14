import React from 'react';
import { FaPhoneAlt, FaRegCommentDots, FaVideo } from 'react-icons/fa';
import { MdHistory } from 'react-icons/md';



const iconMap = {
    text: <FaRegCommentDots className="text-xl" />,
    meetup: <FaPhoneAlt className="text-xl" />,
    video: <FaVideo className="text-xl" />,
};

const interactions = [
    {
        id: 1,
        type: "text",
        title: "Text",
        description: "Asked for career advice",
        date: "Jan 28, 2026",
    },
    {
        id: 2,
        type: "meetup",
        title: "Meetup",
        description: "Industry conference meetup",
        date: "Jan 28, 2026",
    },
    {
        id: 3,
        type: "video",
        title: "Video",
        description: "Asked for career advice",
        date: "Jan 28, 2026",
    },
    {
        id: 4,
        type: "text",
        title: "Text",
        description: "Asked for career advice",
        date: "Jan 28, 2026",
    },
];

const RecentInteractions = () => {
    return (
        <div className="bg-base-100 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl text-green-600 font-semibold">Recent Interactions</h2>
                <button className="btn btn-sm btn-outline btn-primary font-medium"><MdHistory size={16} /> Full History</button>
            </div>

            <div className="space-y-3">
                {interactions.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-3 rounded-lg border border-gray-100 hover:bg-base-200 transition" >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-base-200 rounded-full">
                                {iconMap[item.type]}
                            </div>
                            <div>
                                <h3 className="font-medium">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                        </div>

                        <span className="text-sm text-gray-400">{item.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentInteractions;