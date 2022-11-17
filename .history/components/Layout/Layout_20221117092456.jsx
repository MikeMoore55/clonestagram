import React from 'react';
import Header from './Header';

function Layout({children}) {
  return (
    <div id='Layout'>
      <Header />
      {children}
    </div>
  );
};

export default Layout