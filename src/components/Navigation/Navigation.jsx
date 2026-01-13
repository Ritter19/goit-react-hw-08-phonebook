
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { UserMenu } from '../UserMenu/UserMenu';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation(); 

  return (
    <nav className={css.nav} aria-label="Main navigation">
      <div className={css.container}>
        {}
        <Link to="/" className={css.brand}>
          📗 PhoneBook
        </Link>

        <div className={css.navLinks}>
          <Link
            to="/"
            className={`${css.navLink} ${
              location.pathname === '/' ? css.active : ''
            }`}
          >
            Home
          </Link>

          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className={`${css.navLink} ${
                  location.pathname === '/register' ? css.active : ''
                }`}
              >
                Register
              </Link>
              <Link
                to="/login"
                className={`${css.navLink} ${
                  location.pathname === '/login' ? css.active : ''
                }`}
              >
                Login
              </Link>
            </>
          ) : (
            <Link
              to="/contacts"
              className={`${css.navLink} ${
                location.pathname === '/contacts' ? css.active : ''
              }`}
            >
              Contacts
            </Link>
          )}
        </div>

        {isLoggedIn && <UserMenu />}
      </div>
    </nav>
  );
};
