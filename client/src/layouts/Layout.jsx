import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout(props) {
  const { currentUser, handleLogOut } = props;
  return (
    <div className="flex flex-col space-y-8">
      <Nav currentUser={currentUser} handleLogOut={handleLogOut} />
      {props.children}
      <Footer />
    </div>
  );
}
