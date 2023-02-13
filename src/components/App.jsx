import Profile from './Profile/Profile';
import users from './Profile/user.json';
import stats from './Statistics/data.json';
import StatisticList from './Statistics/StatisticList';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';



export const App = () => {
  return (
    <div
          style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
    }}
    >
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        url={users.avatar}
        stats={users.stats}
      />
      <StatisticList
        stats={stats} title="Upload stats"
      />

      <FriendList
        friends={friends} />
    </div>
  );
};


