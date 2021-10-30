import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';

import './styles/index.css';

import {BrowserRouter, Switch} from 'react-router-dom';

import { AuthProvider } from './contexts/Auth';
import PublicRoute from './components/router/PublicRouter';
import PrivateRouter from './components/router/PrivateRouter';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/">
            <p>Inicio</p>
          </PublicRoute>
          <PublicRoute exact path="/register">
            <p>Registrarse</p>
          </PublicRoute>
          <PublicRoute exact path="/login">
            <p>Login</p>
          </PublicRoute>
          <PrivateRouter path="/home">
            <p>Home</p>
          </PrivateRouter>
          <PrivateRouter exact path="/favorites">
            <p>Favoritos</p>
          </PrivateRouter>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;