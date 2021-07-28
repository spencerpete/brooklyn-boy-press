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
                <Link className="mx-6 nav-link" to="/sign-up">
                  Sign In / Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <FiMenu onClick={toggleShow} className="navbar-dropdown w-full bg-white" />
        </div>
      </div>
    </div>
    //   <nav
    //     className={`nav flex justify-between ${
    //       scrolling ? 'filter drop-shadow-lg' : ''
    //     } fixed w-full bg-white mb-8 text-xl p-4`}
    //   >
    //     {window.location.pathname === '/homepage' ? (
    //       <div></div>
    //     ) : (
    //       <Link to="/homepage" className="mx-6">
    //         brooklyn boy press
    //       </Link>
    //     )}
    //     <div className="flex justify-between self-end">
    //       <Link className="mx-6" to="/articles">
    //         Articles
    //       </Link>
    //       <Link className="mx-6" to="/reviews">
    //         Reviews
    //       </Link>
    //       {currentUser ? (
    //         <div>
    //           <button className="mx-6" onClick={handleLogOut}>
    //             Logout
    //           </button>
    //         </div>
    //       ) : (
    //         <Link className="mx-6" to="/sign-up">
    //           Sign In / Sign Up
    //         </Link>
    //       )}
    //     </div>
    //   </nav>
  );
}
