import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/CSS/Nav.css';

export default function Nav(props) {
  const [scrolling, setScrolling] = useState(false);
  const { currentUser, handleLogOut } = props;

  const addShadow = () => {
    if (window.scrollY >= 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener('scroll', addShadow);
  return (
    <nav
      className={`nav flex justify-between ${
        scrolling ? 'filter drop-shadow' : ''
      } fixed w-full bg-white mb-8`}
    >
      {window.location.pathname === '/homepage' ? (
        <div></div>
      ) : (
        <Link to="/homepage">brooklyn boy press</Link>
      )}
      <div className="flex justify-between self-end">
        <Link className="mx-6" to="/articles">
          Articles
        </Link>
        <Link className="mx-6">Reviews</Link>
        {currentUser ? (
          <div>
            <button className="mx-6" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        ) : (
          <Link className="mx-6" to="/sign-up">
            Sign In / Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
}
