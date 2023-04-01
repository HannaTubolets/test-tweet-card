import { useEffect, useState } from 'react';
import storage from 'helpers/storage';
import UserCard from 'components/UserCard/UserCard';
import data from 'data/data.json';

const UserCardList = () => {
  const [users, setUsers] = useState(storage.load('users-list') ?? data.users);

  useEffect(() => {
    storage.save('users-list', users);
  }, [users]);

  const updateUsersData = (id, followers, isFollow) => {
    const updateUsers = users.map(user => {
      if (user.id === id) {
        user.followers = followers;
        user.isFollowing = isFollow;
      }
      return user;
    });
    setUsers(updateUsers);
  };

  return (
    <div>
      {data.map(user => (
        <UserCard key={user.id} user={user} updateUsersData={updateUsersData} />
      ))}
    </div>
  );
};

export default UserCardList;
