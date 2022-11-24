
import { Online, Offline, ListItem, Avatar, FriendName } from './FriendsList.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ( { friend: { avatar, name, isOnline } } ) =>
{
    return (
        <ListItem>
          {(isOnline ? <Online></Online> : <Offline></Offline>)}
          <Avatar
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <FriendName>{name}</FriendName>
        </ListItem>
    )
}

FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

