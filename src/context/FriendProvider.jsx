import { useEffect, useState } from "react";
import { FriendContext } from "./FriendContext";

const FriendProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState('all');

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

    const data = {
        friends,
        filteredFriends,
        loading,
        statusFilter,
        handleFilterChange
    }

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;