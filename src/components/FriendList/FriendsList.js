import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { ListOFFriends } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <ListOFFriends>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend}/>
      ))}
    </ListOFFriends>
  );
};

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired
}
