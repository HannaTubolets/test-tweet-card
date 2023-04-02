import { useEffect, useState } from 'react';
import storage from 'helpers/storage';
import UserCard from 'components/UserCard/UserCard';
import data from 'data/data.json';

import { CardList } from './UserCardList.styled';

const UserCardList = () => {
  const [users, setUsers] = useState(storage.load('users-list') ?? data.users);

  useEffect(() => {
    storage.save('users-list', users);
  }, [users]);

  const changeUserData = (id, followers, isFollow) => {
    const updateUsers = data.map(user => {
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
      {data.map(user => (
        <UserCard key={user.id} user={user} changeUserData={changeUserData} />
      ))}
    </CardList>
  );
};

export default UserCardList;