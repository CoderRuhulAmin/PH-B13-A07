import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import FriendDetailsCard from '../ui/FriendDetailsCard';
import FriendCard from '../ui/FriendCard';
import { LuBellRing } from 'react-icons/lu';
import Card from '../ui/Card';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiArchive } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
import { MdHistory, MdOutlineTextsms } from 'react-icons/md';
import { GoDeviceCameraVideo } from 'react-icons/go';
import RecentInteractions from '../components/RecentInteractions';
import { FriendContext } from '../context/FriendContext';

const FriendDetails = () => {
    const { id } = useParams();
    // console.log(typeof id);

    const friends = useLoaderData();
    // console.log(friends);

    const expectedFriend = friends.find((friend) => friend.id === Number(id));

    const {handleInteractions} = useContext(FriendContext);

    return (
        <section className='px-4 py-12'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>

                    <div className='w-full flex flex-col md:col-span-4 space-y-5'>

                        <FriendDetailsCard friend={expectedFriend} />

                        <div className='btn flex items-center gap-2 bg-base-100 text-lg font-medium p-6 shadow-sm'>
                            <LuBellRing size={20} /> Snooze 2 Weeks
                        </div>
                        <div className='btn flex items-center gap-2 bg-base-100 text-lg font-medium p-6 shadow-sm'>
                            <FiArchive size={20} /> Archive
                        </div>
                        <div className='btn flex items-center gap-2 bg-base-100 text-lg font-medium p-6 shadow-sm text-red-500'>
                            <RiDeleteBinLine size={20} /> Delete
                        </div>

                    </div>

                    <div className='md:col-span-8 space-y-5'>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-center">
                            <div className="card col-span-3 md:col-span-1 bg-base-100 shadow-sm rounded-xl hover:shadow-md transition flex items-center justify-center">
                                <div className="card-body items-center">
                                    <h2 className="text-3xl font-bold">
                                        {expectedFriend.days_since_contact}
                                    </h2>
                                    <p className="text-sm text-gray-500">Days Since Contact</p>
                                </div>
                            </div>

                            <div className="card col-span-3 md:col-span-1 bg-base-100 shadow-sm rounded-xl hover:shadow-md transition flex items-center justify-center">
                                <div className="card-body items-center">
                                    <h2 className="text-3xl font-bold">
                                        {expectedFriend.goal}
                                    </h2>
                                    <p className="text-sm text-gray-500">Goal (Days)</p>
                                </div>
                            </div>

                            <div className="card col-span-3 md:col-span-1 bg-base-100 shadow-sm rounded-xl hover:shadow-md transition flex items-center justify-center">
                                <div className="card-body items-center">
                                    <h2 className="text-3xl font-bold">
                                        {new Date(expectedFriend.next_due_date).toLocaleDateString()}
                                    </h2>
                                    <p className="text-sm text-gray-500">Next Due Date</p>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className='flex justify-between items-center'>
                                    <h2 className="text-xl text-green-600 font-semibold">Relationship Goal</h2>
                                    <button className='btn btn-outline btn-primary font-medium'>Edit</button>
                                </div>
                                <p className='text-lg text-gray-500'>Connect every <strong className='text-neutral-950'>{expectedFriend.goal} days</strong></p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className='flex justify-between items-center'>
                                    <h2 className="text-xl text-green-600 font-semibold">Quick Check-In</h2>
                                </div>

                                <div className="flex flex-wrap justify-start items-center gap-5">

                                    <button
                                        onClick={()=>handleInteractions(expectedFriend, "call")}
                                        className="flex-1 min-w-30 bg-green-100 text-green-700 p-4 rounded-xl flex flex-col items-center justify-center text-lg hover:bg-green-200 transition active:scale-95 cursor-pointer">
                                        <BiPhoneCall size={32} className="mb-2" />
                                        <span>Call</span>
                                    </button>

                                    <button
                                        onClick={()=>handleInteractions(expectedFriend, "text")}
                                        className="flex-1 min-w-30 bg-blue-100 text-blue-700 p-4 rounded-xl flex flex-col items-center justify-center text-lg hover:bg-blue-200 transition active:scale-95 cursor-pointer">
                                        <MdOutlineTextsms size={32} className="mb-2" />
                                        <span>Text</span>
                                    </button>

                                    <button
                                        onClick={()=>handleInteractions(expectedFriend, "video")}
                                        className="flex-1 min-w-30 bg-purple-100 text-purple-700 p-4 rounded-xl flex flex-col items-center justify-center text-lg hover:bg-purple-200 transition active:scale-95 cursor-pointer">
                                        <GoDeviceCameraVideo size={32} className="mb-2" />
                                        <span>Video</span>
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-sm">
                            <RecentInteractions />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default FriendDetails;