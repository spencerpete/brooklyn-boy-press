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
      className={`nav flex justify-center ${
        scrolling ? 'filter drop-shadow' : ''
      } fixed w-full bg-white mb-8`}
    >
      {window.location.pathname === '/homepage' ? '' : <h1>brooklyn boy press</h1>}
      <div className="flex justify-between">
        <Link to="/articles">Articles</Link>
        <Link>Reviews</Link>
      </div>
      {currentUser ? (
        <div>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      ) : (
        <Link to="/sign-up">Sign In / Sign Up</Link>
      )}
    </nav>
  );
}
