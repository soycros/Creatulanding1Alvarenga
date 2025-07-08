import React from 'react';
import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main style={{ padding: '2rem' }}>{children}</main>
    </>
  );
}

export default Layout;
