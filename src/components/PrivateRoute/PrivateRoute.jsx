import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/authSelectors';
import { PulseLoader } from 'react-spinners';
import css from './PrivateRoute.module.css';

export const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return (
      <div className={css.loadingContainer}>
        <PulseLoader color="#16a34a" size={12} speedMultiplier={1} />
      </div>
    );
  }

  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};
