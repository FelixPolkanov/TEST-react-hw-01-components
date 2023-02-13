import css from '../FriendList/friendsList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem';



export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
    )
};