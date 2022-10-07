import React from 'react';
import PropTypes from "prop-types";

import css from './FriendListItem.module.css'


export const FriendListItem = ({ id, isOnline, avatar, name }) => (
  <li className={css.item} key={id}>
    <span className={css.status} style={{ backgroundColor: isOnline ?'green': 'red' }}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
    </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};