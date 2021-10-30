import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(JSON.parse(window.localStorage.getItem('datauser')) || null);
  return (
    <AuthContext.Provider value={ { userData, setUserData } }>
      { children }
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthContext;
