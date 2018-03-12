import React from 'react';
import { Avatar } from 'material-ui';

import icon from '../../images/Pikachu.jpg';

const styles = {
  avatarDiv: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
};

const Profile = () => (
  <div className='content-main'>
    <div className='profile-hero'>
    </div>
    <div style={styles.avatarDiv}>
      <Avatar alt='mkt-Do' src={icon} />
    </div>
    <h2>Profile</h2>
  </div>
);

export default Profile;
