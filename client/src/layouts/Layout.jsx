import React, { useState } from 'react';
import Nav from './Nav';
import NavModal from './NavModal';
import Footer from './Footer';

export default function Layout(props) {
  const { currentUser, handleLogOut } = props;
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(prev => !prev);
  };
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavModal
        currentUser={currentUser}
        handleLogOut={handleLogOut}
        toggleShow={toggleShow}
        show={show}
      />
      <Nav currentUser={currentUser} handleLogOut={handleLogOut} toggleShow={toggleShow} />
      {props.children}
      <Footer />
    </div>
  );
}
