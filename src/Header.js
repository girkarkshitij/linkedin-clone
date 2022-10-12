import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import logo from './assets/linkedin.png';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={logo} alt='linkedin logo' />
        <div className='header__search'>
          <SearchIcon />
          <input type='text' name='' id='' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption
          avatar='https://media-exp1.licdn.com/dms/image/C5103AQHzj3HPBHPSsA/profile-displayphoto-shrink_100_100/0/1564754135550?e=1671062400&v=beta&t=48sUynDdDfzjtmjIKnjKcabzRKZDiMJ6sVnEmu_HeBw'
          title='Me'
        />
      </div>
    </div>
  );
}

export default Header;
