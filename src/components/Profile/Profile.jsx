import PropTypes from 'prop-types';
import css from '../Profile/profile.module.css';


export default function Profile(props) {
  const { username, tag, location, url,  stats: { followers, likes, views } } = props;
  return (
    <div className="profile">
      <div className="description">
        <img src={url} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
    }) 
    
}
