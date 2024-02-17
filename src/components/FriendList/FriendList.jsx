

import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends}>
      {friends.map(friend => (
        <li className={css.friend} key={friend.id}>
          <FriendListItem data={friend} /> 
        </li>
      ))}
    </ul>
  );
};
