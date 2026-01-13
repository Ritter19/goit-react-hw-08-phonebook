import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');

    if (confirmed) {
      dispatch(logOut());
    }
  };

  return (
    <div className={css.container}>
      <p className={css.email}>👤 {user.email}</p>
      <button className={css.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
