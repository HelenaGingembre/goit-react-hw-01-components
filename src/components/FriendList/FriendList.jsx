import React from 'react';
import PropTypes from "prop-types";

import { FriendListItem } from './FriendListItem/FriendListItem';

import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(item => (
                        <FriendListItem avatar={item.avatar}
                                        name={item.name}
                                        isOnline={item.isOnline}
                                        key={item.id} />
                    )   
            )}
        </ul>
    ); 
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};