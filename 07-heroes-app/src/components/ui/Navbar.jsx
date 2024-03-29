import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {
  const navigate = useNavigate();

  const context = useContext(AuthContext);

  const { dispatch } = context;

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });

    navigate('/login', { replace: true });
  };

  const name = useContext(AuthContext).user.name;

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) =>
              'nav-item nav-link' + (isActive ? ' active' : '')
            }
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              'nav-item nav-link' + (isActive ? ' active' : '')
            }
            to='/dc'
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              'nav-item nav-link' + (isActive ? ' active' : '')
            }
            to='/search'
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-link nav-item text-info'>{name}</span>

          <button className='btn nav-item nav-link' onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
