import React from 'react';
import PropTypes from "prop-types";

export const Profile = ({
  username,
  tag,
  location,
  avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats }) => {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt="User avatar"
          class="avatar" width="250"
        />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">{stats.followers}</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">{stats.views}</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">{stats.likes}</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
};
//Ви можете об’єднати будь-яке з вищенаведеного за допомогою `isRequired`, щоб гарантувати попередження
  // відображається, якщо проп не надано.

Profile.propTypes = {
  // user: propTypes.shape({
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats:PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  // }) 

};