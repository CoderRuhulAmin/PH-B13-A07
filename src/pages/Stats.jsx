import React, { useContext } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../context/FriendContext';

const COLORS = {
    text: "#7c3aed",
    call: "#1f2937",
    video: "#22c55e",
};

const Stats = () => {

    const { interactions } = useContext(FriendContext)

    const counts = {
        text: 0,
        call: 0,
        video: 0,
    };

    interactions.forEach((item) => {
        counts[item.type]++;
    });

    const data = [
        { name: "Text", value: counts.text },
        { name: "Call", value: counts.call },
        { name: "Video", value: counts.video },
    ];

    return (
        <section className='px-4'>
            <div className='container mx-auto'>
                <div className='mb-4'>
                    <h2 className='text-4xl font-bold'>Friendship Analytics</h2>
                </div>
                <div className="bg-base-100 p-5 rounded-xl shadow w-full">
                    <h2 className="text-lg font-medium text-gray-600 mb-4">
                        By Interaction Type
                    </h2>

                    <div className="flex justify-center">
                        <PieChart width={250} height={250} >
                            <Pie
                                data={data}
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[entry.name.toLowerCase()]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend/>
                        </PieChart>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;