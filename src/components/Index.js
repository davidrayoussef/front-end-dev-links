import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Index = ({ children }) => {
  return (
    <div className="app">
      <Header />
      {children}
    </div>
  );
};

Index.propTypes = {
  children: PropTypes.node.isRequired
};

export default Index;
