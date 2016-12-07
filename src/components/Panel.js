import React from 'react';
import Link from './Link';
import icons from './icons/IconModule';

const Panel = ({heading, name, icon, links}) => {
  return (
    <li className="panel">
      <header>
        <span className="panel-icon">
          {icons[icon]}
        </span>
        <span className="panel-header">
          <h2>{name}</h2>
          <h3>{heading}</h3>
        </span>
      </header>
      <ul className="links-container">
        {links.map(link => {
          return (
            <Link
              key={link.name}
              name={link.name}
              defaultIcon={icon}
              thumbnail={link.thumbnail}
              url={link.url}
            />
          );
        })}
      </ul>
    </li>
  );
};

export default Panel;
