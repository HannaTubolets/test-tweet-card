import { useEffect, useState } from 'react';
import storage from 'helpers/storage';
import UserCard from 'components/UserCard/UserCard';
import data from 'data/data.json';

import { CardList } from './UserCardList.styled';

const UserCardList = () => {
  const [users, setUsers] = useState(storage.load('users-list') ?? data);

  useEffect(() => {
    storage.save('users-list', users);
  }, [users]);

  const changeUserData = (id, followers, isFollow) => {
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
    <CardList>
      {users.map(user => (
        <UserCard key={user.id} user={user} changeUserData={changeUserData} />
      ))}
    </CardList>
  );
};

export default UserCardList;
