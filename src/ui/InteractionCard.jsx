import React from 'react';
import { FaMeetup, FaPhoneAlt, FaRegCommentDots, FaVideo } from 'react-icons/fa';


const iconMap = {
    text: <FaRegCommentDots className="text-xl" />,
    call: <FaPhoneAlt className="text-xl" />,
    meetup: <FaMeetup className="text-xl" />,
    video: <FaVideo className="text-xl" />,
};

const InteractionCard = ({ item }) => {
    return (
        <div key={item.id} className="flex justify-between items-center shadow-sm p-3 rounded-lg border border-gray-100 bg-base-100 hover:bg-base-300 transition" >
            <div className="flex items-center gap-3">
                <div className="p-2 bg-base-200 rounded-full">
                    {iconMap[item.type]}
                </div>
                <div className='space-y-2'>
                    <h3 className="text-xl font-medium"><strong>{item.title}</strong> <span className='text-[18px] text-gray-600'>with {item.friend.name}</span></h3>
                    <p className="text-[16px] font-medium text-gray-500">{item.date}</p>
                </div>
            </div>

            {/* <span className="text-sm text-gray-400">{item.date}</span> */}
        </div>
    );
};

export default InteractionCard;