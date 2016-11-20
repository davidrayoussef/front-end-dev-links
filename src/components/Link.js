import React from 'react';

const Link = ({ name, thumbnail, url }) => {
  return (
    <li className="link">
      <a href={url}>
        <img src={thumbnail} />
        <span className="title">{name}</span>
      </a>
    </li>
  );
}

export default Link;
