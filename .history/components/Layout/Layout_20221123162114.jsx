import React from 'react';
import Header from './Header';

// layout across app
export default function Layout({children}) {
  return (
    <div id='Layout'>
      <Header />
      {children}
    </div>
  );
};
