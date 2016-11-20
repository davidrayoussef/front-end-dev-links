import React from 'react';
import Link from './Link';

const Panel = ({heading, name, links}) => {
  return (
    <li className="panel">
      <h2>{name}</h2>
      <h3>{heading}</h3>
      <ul className="links-container">
        {links.map(link => {
          return (
            <Link
              key={link.name}
              name={link.name}
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
