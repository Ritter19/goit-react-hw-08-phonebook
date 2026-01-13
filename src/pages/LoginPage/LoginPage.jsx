import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/authOperations';
import { selectAuthError } from '../../redux/auth/authSelectors';
import css from './LoginPage.module.css';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectAuthError);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(logIn(formData)).unwrap();
      navigate('/contacts');
    } catch (error) {
      // Error handled by Redux
    }
  };

  return (
    <section className={css.page}>
      <div className={css.formBox}>
        <h1 className={css.heading}>📗 Login</h1>
        <form onSubmit={handleSubmit} className={css.form}>
          {error && (
            <div className={css.errorAlert}>
              <span className={css.errorIcon}>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          <div className={css.formGroup}>
            <label className={css.label} htmlFor="email">
              Email <span className={css.required}>*</span>
            </label>
            <input
              className={css.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={css.formGroup}>
            <label className={css.label} htmlFor="password">
              Password <span className={css.required}>*</span>
            </label>
            <input
              className={css.input}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className={css.submitButton}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
