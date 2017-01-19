import React from 'react';
import Header from './Header';

const Index = ({ children }) => {
  return (
    <div className="app">
      <Header />
      {children}
    </div>
  );
};

export default Index;
