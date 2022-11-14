import user from 'components/Profile/user.json'
import { Profile } from './Profile/Profile';
import data from './Statistics/data.json'
import { Statistic } from './Statistics/Statistics';
import { statisticTitle } from './Statistics/Statistics';


export const App = () =>
{
  return (
    <div
    style={{
        height: '100vh',
        padding: '30px',
        backgroundColor: '#e1e5f5'
      }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic
        stats = { data }
        title = { statisticTitle }
      />
      
    </div>
  );
};
