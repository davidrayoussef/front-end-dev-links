import React from 'react';
import icons from './icons/IconModule';

const LinkItem = ({ name, thumbnail, defaultIcon, url }) => {
  return (
    <a href={url}>
      {thumbnail ? <img src={thumbnail} /> : icons[defaultIcon] }
      <span className="title">{name}</span>
    </a>
  );
}

export default LinkItem;
