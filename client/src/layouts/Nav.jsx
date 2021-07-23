import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const { currentUser, handleLogOut } = props;
  const homepage = false;

  return (
    <div>
      {homepage ? '' : <h1>brooklyn boy press</h1>}
      <Link to="/articles">Articles</Link>
      <Link>Reviews</Link>
      {currentUser ? (
        <div>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      ) : (
        <Link to="/sign-up">Sign In / Sign Up</Link>
      )}
    </div>
  );
}
