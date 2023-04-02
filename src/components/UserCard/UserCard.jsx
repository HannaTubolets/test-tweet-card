import React, { useState } from 'react';

const UserCard = ({ user, changeUserData }) => {
  const [followers, setFollowers] = useState(user.followers);
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);

  const onClickBtn = () => {
    const newIsFollowing = !isFollowing;
    setIsFollowing(newIsFollowing);

    if (newIsFollowing) {
      setFollowers(followers + 1);
      changeUserData(user.id, followers + 1, newIsFollowing);
    } else {
      setFollowers(followers - 1);
      changeUserData(user.id, followers - 1, newIsFollowing);
    }
  };

  return (
    <div>
      <li>
        <img src={user.avatar} alt="avatar" />
        <h1>{user.user}</h1>
        <p>{user.tweets} Tweets</p>
        <p>{followers} Followers</p>
        <button
          type="button"
          onClick={onClickBtn}
          className={isFollowing ? 'following' : 'follow'}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </li>
    </div>
  );
};

export default UserCard;
