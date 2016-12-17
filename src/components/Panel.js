import React from 'react';
import LinkItem from './LinkItem';
import icons from './icons/IconModule';

const Panel = ({heading, name, icon, links}) => {
  return (
    <li className="panel">
      <header>
        <span className="panel-icon">
          <svg x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
            {icons[icon]}
          </svg>
        </span>
        <span className="panel-header">
          <h2>{name}</h2>
          <h3>{heading}</h3>
        </span>
      </header>
      <ul className="links-container">
        {links.map(link => {
          return (
            <LinkItem
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

Panel.PropTypes = {
  heading: React.propTypes.string.isRequired,
  name: React.propTypes.string.isRequired,
  icon: React.propTypes.string.isRequired,
  links: React.propTypes.array.isRequired,
}

export default Panel;
