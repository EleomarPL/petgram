import { useState } from 'react';
import { notifyWarning } from '../const/notifications';
import { isObjectValuesNull, isValidateEmail, validateLength } from '../services/validation/generalValidations';

import '../styles/register.css';

const Register = () => {
  const [password, setPassword] = useState('');
  const [messageStatusPassword, setMessageStatusPaswword] = useState({ color: '', text: '' });
  const [confirmPassword, setConfirmPassword] = useState('');

  const setValidPassword = () => {
    setMessageStatusPaswword({
      color: '#347d39',
      text: 'Las contraseñas coinciden'
    });
  };
  const setInvalidPassword = () => {
    setMessageStatusPaswword({
      color: '#D70B00',
      text: 'Las contraseñas no coinciden'
    });
  };
  const verifyPasswordChange = (evt, setNewValue, index) => {
    setNewValue(evt.target.value);
    if (!index && confirmPassword) {
      if (evt.target.value === confirmPassword) setValidPassword();
      else setInvalidPassword();
    } else if (index) {
      if (evt.target.value === password) setValidPassword();
      else setInvalidPassword();
    }
  };

  const handleRegister = (evt) => {
    evt.preventDefault();
    if (confirmPassword.trim() === password.trim()) {
      let dataNewUser = {
        name: {
          name: 'Nombre',
          minLength: 2,
          maxLength: 45,
          value: evt.target[0].value
        },
        lastName: {
          name: 'Apellido paterno',
          minLength: 2,
          maxLength: 45,
          value: evt.target[1].value
        },
        motherLastName: {
          name: 'Apellido materno',
          minLength: 2,
          maxLength: 45,
          value: evt.target[2].value
        },
        email: {
          name: 'Correo electronico',
          minLength: 10,
          maxLength: 80,
          value: evt.target[3].value
        },
        userName: {
          name: 'Usuario',
          minLength: 6,
          maxLength: 45,
          value: evt.target[4].value
        },
        password: {
          name: 'Contraseña',
          minLength: 6,
          maxLength: 45,
          value: password
        }
      };

      if ( !isObjectValuesNull(dataNewUser) && validateLength(dataNewUser) ) {
        if ( isValidateEmail(dataNewUser.email.value)) {
          console.log('register');
        }
      }
    } else {
      notifyWarning('Las contraseñas no coinciden');
    }
  };
  return (
    <section className="container-register">
      <div className="img-left">
        <picture>
          <source srcSet={ require('../img/register.webp').default } />
          <img src={ require('../img/register.png').default }
            style={ {height: '15rem'} }
          />
        </picture>
      </div>
      <div className="container-inputs-register">
        <form onSubmit={ handleRegister }>
          <div className="pt-4">
            <label htmlFor="name" className="visually-hidden-focusable">Nombre</label>
            <input type="text"
              id="name" className="form-control mt-2"
              placeholder="Nombre"
              required autoFocus
            />
          </div>
          <div className="w-100 d-flex flex-wrap">
            <div className="mt-4 px-0 col-lg-6 pr-lg-1">
              <label htmlFor="pa_lastname" className="visually-hidden-focusable">Apellido paterno</label>
              <input type="text"
                id="pa_lastname" className="form-control"
                placeholder="Apellido paterno" required
              />
            </div>
            <div className="mt-4 px-0 col-lg-6 pl-lg-1">
              <label htmlFor="mo_lastname" className="visually-hidden-focusable">Apellido materno</label>
              <input type="text"
                id="mo_lastname" className="form-control"
                placeholder="Apellido materno" required
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="user" className="visually-hidden-focusable">Email</label>
            <input type="email"
              id="user" className="form-control"
              placeholder="Correo Electronico" required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="user" className="visually-hidden-focusable">Usuario</label>
            <input type="text"
              id="user" className="form-control"
              placeholder="Usuario" required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="visually-hidden-focusable">Contraseña</label>
            <div className="d-flex flex-column flex-sm-row">
              <input id="password" value={ password }
                type="password" className="form-control mr-sm-1 mr-md-2"
                placeholder="Contraseña" required
                onChange={ (evt) => verifyPasswordChange(evt, setPassword, 0) }
              />
            </div>
          </div>
          <div id="box-confirmpass" className="mt-4">
            <label htmlFor="confirmpassword" className="visually-hidden-focusable">Confirmar constraseña</label>
            <div className="d-flex flex-column flex-sm-row">
              <input type="password" id="confirmpassword"
                value={ confirmPassword }
                className="form-control mr-sm-1 mr-md-2" placeholder="Confirmar contraseña"
                onChange={ (evt) => verifyPasswordChange(evt, setConfirmPassword, 1) }
                required
              />
            </div>
          </div>
          <small style={ {fontWeight: '600', color: messageStatusPassword.color} }>
            { messageStatusPassword.text }
          </small>
          <div className="mt-4">
            <button type="submit" className="btn btn-lg btn-primary d-block px-4 mx-auto button-media">
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;