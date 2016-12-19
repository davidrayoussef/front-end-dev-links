import React from 'react';
import { Link } from 'react-router';
import icons from './icons/IconModule';
import { data } from '../data/data';

const Header = () => {
  let displayIcons = data
    .map(devLink =>
      <Link key={devLink['name']} to={devLink['icon']}>
        <svg x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{fill: `rgb(${devLink['color']})`}}>
          { icons[devLink['icon']] }
        </svg>
      </Link>
    );

  return (
    <header className="header-main">
      <div className="title">
        <Link to={'/'}>
          <h1>devLinks</h1>
        </Link>
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
