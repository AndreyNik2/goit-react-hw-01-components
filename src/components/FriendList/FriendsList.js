import PropTypes from 'prop-types';
import { Online, Offline, ListOFFriends, ListItem, Avatar, FriendName } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <ListOFFriends>
      {friends.map(({avatar, name, id, isOnline}) => (
        <ListItem key={id}>
          {(isOnline ? <Online></Online> : <Offline></Offline>)}
          <Avatar
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <FriendName>{name}</FriendName>
        </ListItem>
      ))}
    </ListOFFriends>
  );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf( PropTypes.shape( {
        avatar : PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    } ) ),
}
