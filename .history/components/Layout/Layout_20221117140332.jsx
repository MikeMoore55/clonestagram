import React from 'react';
import Header from './Header';

export default function Layout({children}) {
  return (
    <div id='Layout'>
      <Header />
      {children}
    </div>
  );
};
