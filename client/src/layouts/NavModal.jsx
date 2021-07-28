import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import '../assets/CSS/NavModal.css';

const NavModal = props => {
  const { currentUser, show, toggleShow } = props;
  return (
    <div className={show ? 'sidenav-container show' : 'sidenav-container'}>
      <div className={show ? 'sidenav show' : 'sidenav'}>
        <div className=" sidenav-header">
          <FaTimes className="close" onClick={toggleShow} />
        </div>
        <div className="sidenav-links">
          <Link className="sidenav-link" to="/articles" onClick={toggleShow}>
            Articles
          </Link>
          <Link className="sidenav-link" to="/reviews" onClick={toggleShow}>
            Reviews
          </Link>
          {currentUser ? (
            <Link className="sidenav-link" to="/sign-out" onClick={toggleShow}>
              Logout
            </Link>
          ) : (
            <>
              <Link className="sidenav-link" to="/sign-in" onClick={toggleShow}>
                Sign In
              </Link>
              <Link className="sidenav-link" to="/sign-up" onClick={toggleShow}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavModal;
