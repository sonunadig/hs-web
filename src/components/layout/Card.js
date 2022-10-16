import React from 'react';
import './Card.css';

const HsCard = ({imgUrl, title, text}) => {
  return (
    <div className='hs-card'>
        <img src={imgUrl} alt='Icon' />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default HsCard;