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
import {useDispatch} from 'react-redux';
import {logout} from './features/userSlice';
import {auth} from './firebase';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

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
        <HeaderOption avatar={true} title='Me' onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
