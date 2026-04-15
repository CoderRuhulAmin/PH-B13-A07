import { useEffect, useState } from "react";
import { FriendContext } from "./FriendContext";

const FriendProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState('all');
    const [interactions, setInteractions] = useState([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        fetch('/data/friendsData.json')
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            });
    }, []);

    const handleFilterChange = (status) => {
        setStatusFilter(status);
    };

    const filteredFriends = statusFilter === 'all'
        ? friends
        : friends.filter(friend => friend.status === statusFilter);

    const handleInteractions = (friend, type) => {
        // console.log(interactions);
        const newId = interactions.length + 1;
        const newInteraction = {
            id: newId,
            friend: friend,
            type: type,
            title: type.charAt(0).toUpperCase() + type.slice(1),
            description:
                type === "call"
                    ? "Quick call check-in"
                    : type === "text"
                        ? "Sent a message"
                        : "Started a video chat",
            date: new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }),
        }

        setInteractions([newInteraction, ...interactions]);
        // console.log(interactions);
    }

    const filteredInteractions =
        filter === "all"
            ? interactions
            : interactions.filter((item) => item.type === filter);

    const data = {
        friends,
        filteredFriends,
        loading,
        statusFilter,
        handleFilterChange,
        interactions: filteredInteractions,
        setInteractions,
        handleInteractions,
        filter, 
        setFilter
    }

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;