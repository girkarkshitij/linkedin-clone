import React, {useState} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NotesIcon from '@mui/icons-material/Notes';
import './Feed.css';
import InputOption from './InputOption.js';
import Post from './Post.js';

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = e => {
    e.preventDefault();
  }

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form action=''>
            <input type='text' />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOption Icon={SmartDisplayIcon} title='Video' color='#e7a33e' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
          <InputOption Icon={NotesIcon} title='Write Article' color='#7fc15e' />
        </div>
      </div>

      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name='Kshitij Girkar'
        description='B.E. Computer Engineering'
        message='Message'
      />
    </div>
  );
}

export default Feed;
