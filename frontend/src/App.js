import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';

import './styles/index.css';

import {BrowserRouter, Switch} from 'react-router-dom';

import { AuthProvider } from './contexts/Auth';
import PublicRoute from './components/router/PublicRouter';
import PrivateRouter from './components/router/PrivateRouter';
import Header from './components/Header';
import Index from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <PublicRoute exact path="/">
            <Index />
          </PublicRoute>
          <PublicRoute exact path="/register">
            <Register />
          </PublicRoute>
          <PublicRoute exact path="/login">
            <Login />
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