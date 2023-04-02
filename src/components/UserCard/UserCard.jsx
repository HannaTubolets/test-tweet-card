import React, { useState } from 'react';
import upperImg from '../../images/upper-img.png';
import logo from '../../images/logo.svg';
import {
  Card,
  Txt,
  UpperImg,
  Logo,
  UserImg,
  Btn,
  Name,
} from './UserCard.styled';

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
      <Card>
        <Logo src={logo} alt="avatar" />
        <UpperImg src={upperImg} alt="avatar" />
        <UserImg src={user.avatar} width="80" alt="avatar" />
        <Name>{user.user}</Name>
        <Txt>{user.tweets} Tweets</Txt>
        <Txt>{followers} Followers</Txt>
        <Btn
          type="button"
          onClick={onClickBtn}
          className={isFollowing ? 'following' : 'follow'}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Btn>
      </Card>
    </div>
  );
};

export default UserCard;
