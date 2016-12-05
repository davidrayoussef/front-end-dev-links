import React from 'react';

const Link = ({ name, thumbnail, url }) => {
  return (
    <a href={url}>
      <img src={thumbnail} />
      <span className="title">{name}</span>
    </a>
  );
}

export default Link;
