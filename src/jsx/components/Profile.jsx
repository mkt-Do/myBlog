import React from 'react';
import { Avatar } from 'material-ui';

import icon from '../../images/Pikachu.jpg';

const styles = {
  avatar: {
    display: 'flex',
    justifyContent: 'center',
  }
};

const Profile = () => (
  <div className='content-main'>
    <div className='profile-hero'>
    </div>
    <h2>Profile</h2>
    <div style={styles.avatar}>
      <Avatar alt='mkt-Do' src={icon} />
    </div>
  </div>
);

export default Profile;
