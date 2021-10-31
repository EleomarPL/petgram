import { notifyError, notifySuccess, notifyWarning } from '../const/notifications';
import { createUser } from '../services/api/user';

const useUser = () => {
  const createNewUser = async({name, lastName, motherLastName, email, username, password}) => {
    try {
      let {data} = await createUser(
        {
          name, lastName, motherLastName, email, username, password
        });
      notifySuccess(`¡Felicidades! "${name}" has sido registrado exitosamente. Por favor inicia sesión`);
      return data;
    } catch ( err ) {
      if (err.message === 'Request failed with status code 409') {
        notifyWarning('Ingresa un diferente nombre de usuario');
      }
      if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return false;
    }
  };

  return {
    createNewUser
  };
};

export default useUser;