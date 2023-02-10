import Profile from './Profile/Profile';
import users from './Profile/user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        url={users.avatar}
        stats={users.stats}
        
     
      />
    </div>
  );
};


