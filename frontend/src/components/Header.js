import { useContext } from 'react';
import {NavLink} from 'react-router-dom';

import AuthContext from '../contexts/Auth';
import '../styles/header.css';

const Header = () => {
  const {userData} = useContext(AuthContext);
  
  if (userData !== null)
    return <PrivateHeader />;
  else
    return <PublicHeader />;
};

const PrivateHeader = () => {
  return (
    <nav className="navbar-user">
      <ul className="d-flex justify-content-around align-items-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home"
            activeClassName="active-header"
          >
            <span className="visually-hidden-focusable">Home</span>
            <i className="bi bi-house-door-fill"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/favorites"
            activeClassName="active-header"
          >
            <span className="visually-hidden-focusable">Favorites</span>
            <i className="bi bi-heart-fill"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <div className="btn-group dropup">
            <button type="button" className="dropdown-toggle"
              data-bs-toggle="dropdown" aria-expanded="false"
              id="dropdownMenuClickableInside" data-bs-auto-close="outside"
              style={ {backgroundColor: 'transparent', border: 'none'} }
            >
              <i className="bi bi-person-circle" style={ {fontSize: '1.5rem'} }></i>
              <span className="visually-hidden-focusable">User</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
              <li className="d-flex justify-content-center mt-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                >
                  Cerrar sesión
                </button>
              </li>
              <li><hr className="dropdown-divider" /></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const PublicHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={ {borderBottom: '1px solid #C7C7C7'} }
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"
          style={ {color: 'deeppink'} }
        >
          <strong>PetGram</strong>
        </NavLink>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0" style={ {marginLeft: 'auto'} }>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register"
                activeClassName="active-header"
              >
                Registrarse
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login"
                activeClassName="active-header"
              >
                Iniciar Sesión
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;