import css from '../FriendList/friendsList.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ name, avatar, isOnline }) {
    
    return (
         <li className={css.item}>
      <span
        className={isOnline ? css.status_online : css.status_offline}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
)
}



FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired, 
}