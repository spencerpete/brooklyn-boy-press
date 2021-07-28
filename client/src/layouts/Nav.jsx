import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../assets/CSS/Nav.css';

export default function Nav(props) {
  const [scrolling, setScrolling] = useState(false);
  const { currentUser, handleLogOut, toggleShow } = props;

  const addShadow = () => {
    if (window.scrollY >= 30) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener('scroll', addShadow);
  return (
    <div
      className={`navbar-container w-full fixed z-40 ${
        scrolling ? 'filter drop-shadow-2xl p-6' : ''
      }`}
    >
      <div className="navbar w-full">
        <div className="flex md:w-full md:block hidden ">
          <div className="navbar-auth w-full justify-between">
            <Link to="/homepage" className="mx-6 nav-link">
              brooklyn boy press
            </Link>
            <div>
              <Link className="mx-6 nav-link" to="/articles">
                Articles
              </Link>
              <Link className="mx-6 nav-link" to="/reviews">
                Reviews
              </Link>
              {currentUser ? (
                <button className="mx-6 nav-link" onClick={handleLogOut}>
                  Logout
                </button>
              ) : (
                <button className="mx-6 nav-link">
                  <Link to="/sign-up">Sign In / Sign Up</Link>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <FiMenu onClick={toggleShow} className="navbar-dropdown w-full bg-white" />
        </div>
      </div>
    </div>
  );
}
