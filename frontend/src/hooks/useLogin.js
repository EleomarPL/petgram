import { useContext } from 'react';
import {login as loginUser} from '../services/api/login';
import {notifyError, notifyInfo} from '../const/notifications';
import AuthContext from '../contexts/Auth';

const useLogin = () => {
  const {setUserData} = useContext(AuthContext);

  const login = async({ username, password }) => {
    try {
      let {data} = await loginUser({ username, password });

      let dataUser = {
        name: data.name,
        lastName: data.lastName,
        motherLastName: data.motherLastName,
        email: data.email,
        userName: data.userName
      };
      window.localStorage.setItem('datauser', JSON.stringify(dataUser));
      window.localStorage.setItem('session', JSON.stringify(data.token));

      return dataUser;
    } catch ( err ) {
      if (err.message === 'Network Error')
        notifyError('No encontramos una conexión a internet');
      else if (err.response.data.error === 'Invalid user or password')
        notifyInfo('Usuario o contraseña invalido');
      else
        notifyError('Error, vuelve a intentar, por favor');
      
      return false;
    }
  };
  const logout = () => {
    window.localStorage.clear();
    setUserData(null);
  };

  return {
    login, logout
  };
};

export default useLogin;