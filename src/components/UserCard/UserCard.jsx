import React, { useEffect, useState } from 'react';

const UserCard = ({ user }) => {
  const localUser = JSON.parse(localStorage.getItem(user.id));
  const [isFollowing, setIsFollowing] = useState(
    localUser ? localUser.isFollowing : false
  );
  const [TotalFollowers, setTotalFollowers] = useState(
    localUser ? localUser.TotalFollowers : user.Followers
  );

  const onClickBtn = () => {
    setIsFollowing(!isFollowing);
    setTotalFollowers(prevTotalFollowers =>
      isFollowing ? prevTotalFollowers - 1 : prevTotalFollowers + 1
    );
  };

  useEffect(() => {
    localStorage.setItem(
      user.id,
      JSON.stringify({ isFollowing, TotalFollowers })
    );
  }, [isFollowing, TotalFollowers, user.id]);

  return (
    <div>
      <li>
        <img src={user.avatar} alt="avatar" />
        <h1>{user.user}</h1>
        <p>{user.tweets} tweets</p>
        <p>{user.followers}Followers</p>
        <button type="button" onClick={onClickBtn}>
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </li>
    </div>
  );
};

export default UserCard;
