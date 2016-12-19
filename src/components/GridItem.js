import React, { PropTypes } from 'react';
import LinkItem from './LinkItem';
import icons from './icons/IconModule';

const GridItem = ({heading, name, icon, color, links}) => {
  return (
    <section>
      <header>
        <span className="grid-icon">
          <svg x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{fill: `rgb(${color})`}}>
            {icons[icon]}
          </svg>
        </span>
        <span className="grid-header">
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
              description={link.description}
              url={link.url}
            />
          );
        })}
      </ul>
    </section>
  );
};

GridItem.propTypes = {
  heading: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GridItem;
