// import PropTypes from 'prop-types';
// import { WiMoonAltFull, WiMoonAltNew } from 'react-icons/fa';


// export const FriendsList = ( { friends } ) =>
// {
//     return (
//         <ul class="friend-list">
//             { friends.map( friend => (
//                 <li key={friend.id} class="item">
//                     <span class="status">{friend.isOnline=true? WiMoonAltFull : WiMoonAltNew } </span>
//                     <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
//                     <p class="name">{ friend.name }</p>
//                 </li>
//             ))}
//         </ul>
//     )
// }

// FriendsList.propTypes = {
//     friends: PropTypes.arrayOf( PropTypes.shape( {
//         avatar : PropTypes.string.isRequired,
//         name : PropTypes.string.isRequired,
//         isOnline: PropTypes.bool.isRequired,
//         id: PropTypes.number.isRequired
//     } ) ),
// }