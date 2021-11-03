import { useState } from 'react';

import useLogin from '../hooks/useLogin';
import { notifyWarning } from '../const/notifications';
import SpinnerButtonLoading from '../components/common/SpinnerButtonLoading';

import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {login} = useLogin();

  const handleLogin = (evt) => {
    evt.preventDefault();

    if (!(password && username)) {
      notifyWarning('Rellene todos los campos');
    } else {
      setIsLoading(true);
      login({username, password, setIsLoading});
    }
  };

  return (
    <section>
      <h1 className="text-center">Iniciar Sesión</h1>
      <div className="container-login">
        <div className="img-left">
          <picture>
            <source srcSet={ require('../img/login.webp').default } />
            <img src={ require('../img/login.png').default }
              style={ {
                width: '15rem',
                objectFit: 'contain'
              } }
            />
          </picture>
        </div>
        <div className="container-inputs-login">
          <form onSubmit={ handleLogin }>
            <div className="input-group flex-column mb-2 mt-2">
              <label htmlFor="user" id="addon-wrapping">Usuario</label>
              <input type="text" className="form-control w-100"
                placeholder="Usuario" id="user"
                value={ username } onChange={ (evt) => setUsername(evt.target.value) }
              />
            </div>
            <div className="input-group flex-column mb-2">
              <label htmlFor="password" id="addon-wrapping">Contraseña</label>
              <input type="password" className="form-control w-100"
                placeholder="Contraseña" id="password"
                value={ password } onChange={ (evt) => setPassword(evt.target.value) }
              />
            </div>
            <div className="d-flex justify-content-center mb-2">
              <button type="submit" className="btn btn-primary button-media"
                style={ {fontSize: '1.3rem'} }
                disabled={ isLoading }
              >
                { isLoading &&
                  <SpinnerButtonLoading />
                }
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;