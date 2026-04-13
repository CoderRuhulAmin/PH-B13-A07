import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className='px-4 py-12'>
            <div className='container mx-auto'>
                <div className="flex flex-col items-center text-center space-y-5">

                    <h2 className="text-3xl font-bold">KeenKeeper</h2>
                    <p className="max-w-md text-sm opacity-80">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <button className='btn bg-green-900 text-base-200'><FaPlus /> Add a Friend</button>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="text-3xl font-bold">10</h2>
                                <p>Total Friends</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="text-3xl font-bold">03</h2>
                                <p>On Track</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="text-3xl font-bold">6</h2>
                                <p>Need Attention</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="text-3xl font-bold">12</h2>
                                <p>Interactions This Month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;