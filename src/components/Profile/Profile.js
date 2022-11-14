import PropTypes from 'prop-types';
import { ProfileCard, Description, Avatar, UserName, UserLocation, UserTag, Label, Quantity, Stats } from './Profile.styled';



export const Profile = ( { username, tag, location, avatar, stats } ) => {
  return (<ProfileCard>
    <Description>
      <Avatar
        src={ avatar }
        alt="User avatar"
        className="avatar"
      />
      <UserName>{ username }</UserName>
      <UserTag>@ { tag }</UserTag>
      <UserLocation>{ location }</UserLocation>
    </Description>
    <Stats>
      <li>
        <Label>Followers</Label>
        <Quantity>{ stats.followers }</Quantity>
      </li>
      <li>
        <Label>Views</Label>
        <Quantity>{ stats.views }</Quantity>
      </li>
      <li>
        <Label>Likes</Label>
        <Quantity>{ stats.likes }</Quantity>
      </li>
    </Stats>
  </ProfileCard>
)};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact( {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}


