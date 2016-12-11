import React from 'react';
import icons from './icons/IconModule';
import { data } from '../data/data';

const Header = () => {
  let displayIcons = Object.keys(icons)
    .map(icon =>
      <a key={icon} href="#">
        <svg x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
          { icons[icon] }
        </svg>
      </a>
    );

  return (
    <header className="header-main">
      <div className="title">
        <h1>devLinks</h1>
        <h2>Resources for Front-End Developers</h2>
        <div className="author">Curated by D.R.</div>
      </div>
      <div className="links">
        { displayIcons }
      </div>
      <div className="share">
        Share on:
      </div>
    </header>
  );
};

export default Header;
