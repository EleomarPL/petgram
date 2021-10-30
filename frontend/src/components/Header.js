import { useContext } from 'react';
import {NavLink} from 'react-router-dom';

import AuthContext from '../contexts/Auth';

const Header = () => {
  const {userData} = useContext(AuthContext);
  
  if (userData !== null)
    return (
      <p>Header</p>
    );
  else
    return <PublicHeader />;
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