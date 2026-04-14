import React from 'react';

const ButtonFull = ({iconTag = "LuBellRing", buttonText = "Snooze 2 Weeks"}) => {
    return (
        <div className='card bg-base-100 p-6 shadow-sm'>
            <LuBellRing /> Snooze 2 Weeks
        </div>
    );
};

export default ButtonFull;