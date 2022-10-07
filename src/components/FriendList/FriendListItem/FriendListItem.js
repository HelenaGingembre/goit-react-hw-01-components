import React from 'react';
import PropTypes from "prop-types";
//TODO!!! от пропа isOnline, должен меняться цвет фона span.status 

export const FriendListItem = ({ id, isOnline, avatar, name }) => (
    <li class="item" key={id}>
        <span class="status">{isOnline?'online':'offline'}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
    </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};