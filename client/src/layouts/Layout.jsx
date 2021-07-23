import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout(props) {
  const { currentUser, handleLogOut } = props;
  return (
    <div>
      <Nav currentUser={currentUser} handleLogOut={handleLogOut} />
      {props.children}
      <Footer />
    </div>
  );
}
