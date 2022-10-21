import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  function newsArticle(heading, subtitle) {
    return (
      <div className='widgets__article'>
        <div className='widgets__articleLeft'>
          <FiberManualRecordIcon />
        </div>
        <div className='widgets__articleRight'>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('React newsletter by ABC', '6h ago 79208 readers')}
      {newsArticle('New updates in web dev', '7h ago 1208 readers')}
      {newsArticle('Most affordable indian cities', '7h ago 15000 readers')}
      {newsArticle(
        'How to start your career in data science',
        '7h ago 15600 readers'
      )}
      {newsArticle('New update by Redux devtools', '9h ago 15002 readers')}
      {newsArticle('Android + Windows ecosystem', '1d ago 134000 readers')}
    </div>
  );
}

export default Widgets;
