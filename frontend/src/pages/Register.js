import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Container, Grid, Input, Text } from '@nextui-org/react';
import styled from 'styled-components';

import SpinnerButtonLoading from '../components/common/SpinnerButtonLoading';
import { notifyWarning } from '../const/notifications';
import { isObjectValuesNull, isValidateEmail, validateLength } from '../services/validation/generalValidations';
import useUser from '../hooks/useUser';

import '../styles/register.css';
import ComponentGrouper from '../components/common/ComponentGrouper';

const Register = () => {
  const [password, setPassword] = useState('');
  const [messageStatusPassword, setMessageStatusPaswword] = useState({ color: '', text: '' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const {createNewUser} = useUser();

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
          setIsLoading(true);
          createNewUser({
            name: dataNewUser.name.value, lastName: dataNewUser.lastName.value,
            motherLastName: dataNewUser.motherLastName.value, email: dataNewUser.email.value,
            username: dataNewUser.userName.value, password: dataNewUser.password.value
          }).then((response) => {
            setIsLoading(false);
            if (response) {
              history.push('/login');
            }
          });
        }
      }
    } else {
      notifyWarning('Las contraseñas no coinciden');
    }
  };
  return (
    <Container>
      <Text
        h1
        size={ 39 }
        css={ {
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
          textAlign: 'center'
        } }
        weight="bold"
      >
        Registrate
      </Text>
      <Grid.Container
        justify="space-evenly"
        css={ {margin: '1rem 0'} }
      >
        <Grid css={ { margin: 'auto' } }>
          <div>
            <picture>
              <source srcSet={ require('../img/register.webp').default } />
              <img src={ require('../img/register.png').default }
                style={ {height: '15rem'} }
              />
            </picture>
          </div>
        </Grid>
        <ContainerForm xs>
          <form onSubmit={ handleRegister }
            style={ {width: '100%'} }
          >
            <ComponentGrouper>
              <Input label="Nombre" placeholder="Ingresa tu nombre"
                bordered fullWidth
                required
              />
            </ComponentGrouper>
            <ComponentGrouper>
              <Input label="Apellido paterno" placeholder="Ingresa tu apellido paterno"
                bordered fullWidth
                required
              />
              <Input label="Apellido materno" placeholder="Ingresa tu apellido materno"
                bordered fullWidth
                required
              />
            </ComponentGrouper>
            <ComponentGrouper>
              <Input label="Correo electronico" placeholder="Ingresa tu correo electronico"
                bordered fullWidth
                type="email" required
              />
              <Input label="Usuario" placeholder="Ingresa tu usuario"
                bordered fullWidth
                required
              />
            </ComponentGrouper>
            <ComponentGrouper>
              <Input label="Contraseña" placeholder="Ingresa tu contraseña"
                bordered fullWidth
                required type="password"
                onChange={ (evt) => verifyPasswordChange(evt, setPassword, 0) }
                value={ password }
              />
              <Input label="Confirmar contraseña" placeholder="Confirma tu contraseña"
                bordered fullWidth
                required type="password"
                onChange={ (evt) => verifyPasswordChange(evt, setConfirmPassword, 1) }
                value={ confirmPassword }
              />
            </ComponentGrouper>
            <Text color={ messageStatusPassword.color }
              weight="bold" css={ {textAlign: 'center'} }
            >
              { messageStatusPassword.text }
            </Text>
            <Button shadow color="primary"
              type="submit"
              disabled={ isLoading }
              css={ { px: '$13', margin: '1rem auto 0 auto' } }
              auto size="lg"
            >
              { isLoading && <SpinnerButtonLoading /> }
              Registrarme
            </Button>
          </form>
        </ContainerForm>
      </Grid.Container>
    </Container>
  );
};

const ContainerForm = styled(Grid)`
  border-radius: 10px;
  padding: 10px 15px;
  background: #ECE9E6; 
  background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6); 
  background: linear-gradient(to right, #FFFFFF, #ECE9E6); 
`;

export default Register;