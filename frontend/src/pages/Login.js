import { useState } from 'react';
import { Button, Container, Grid, Input, Text } from '@nextui-org/react';
import styled from 'styled-components';

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
    <Container sm>
      <Text
        h1
        size={ 39 }
        css={ {
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
          textAlign: 'center'
        } }
        weight="bold"
      >
        Iniciar sesión
      </Text>
      <Grid.Container
        justify="space-evenly"
        css={ {margin: '1rem 0'} }
      >
        <Grid css={ { margin: 'auto' } }>
          <div>
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
        </Grid>
        <ContainerForm xs>
          <form onSubmit={ handleLogin }
            style={ {width: '100%'} }
          >
            <Input label="Usuario" placeholder="Ingresa tu usuario"
              bordered fullWidth
              required value={ username }
              onChange={ e => setUsername(e.target.value) }
            />
            <Input label="Contraseña" placeholder="Ingresa tu contraseña"
              bordered fullWidth
              required type="password"
              value={ password }
              onChange={ e => setPassword(e.target.value) }
            />
            <Button shadow color="primary"
              type="submit"
              disabled={ isLoading }
              css={ { px: '$13', margin: '1rem auto 0 auto' } }
              auto size="lg"
            >
              { isLoading && <SpinnerButtonLoading /> }
              Iniciar sesión
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

export default Login;