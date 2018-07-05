import React from 'react';
import Share from './Share';
import icons from './icons/IconModule';
import { data } from '../data/data';
import { NavLink as Link } from 'react-router-dom';

const rootPath = process.env.ENV === 'production' ? '/front-end-dev-links' : '/';

const Header = () => {
  const displayIcons = data
    .map(devLink =>
      <Link 
        key={devLink['name']} 
        to={devLink['icon']} 
        activeClassName="active"
      >
        <svg x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{fill: `rgb(${devLink['color']})`}}>
          { icons[devLink['icon']] }
        </svg>
      </Link>
    );

  return (
    <header className="header-main">
      <div className="title">
        <Link to={rootPath}>
          <h1>devLinks</h1>
        </Link>
        <h2>Resources for Front-End Developers</h2>
        <div className="author">Curated by D.R.</div>
      </div>
      <nav className="nav-links">
        { displayIcons }
      </nav>
      <Share />
    </header>
  );
};

export default Header;
