import {Avatar} from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
        <Avatar className='sidebar__avatar' />
        <h2>Kshitij Girkar</h2>
        <h4>Java | JavaScript | MERN</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>560</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>1080</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('javascript')}
        {recentItem('html')}
        {recentItem('react')}
        {recentItem('css')}
        {recentItem('firebase')}
      </div>
    </div>
  );
}

export default Sidebar;
