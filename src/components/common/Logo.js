import React from 'react';
const imgUrl = 'https://s3.ap-south-1.amazonaws.com/tpng-images/random/original/6be52f0b-56bf-4fdc-abd3-0bec9e58610c.png';

function Logo({className}) {
  return (
    <img
      src={imgUrl}
      className={`logo ${className ? className : ''}`}
      alt="HealtifyMe"
    />
  );
}

export default Logo;
