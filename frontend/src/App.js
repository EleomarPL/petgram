import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';
import 'react-toastify/dist/ReactToastify.css';

import './styles/index.css';

import {BrowserRouter, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {lazy, Suspense} from 'react';
import Helmet from 'react-helmet';

import { AuthProvider } from './contexts/Auth';
import PublicRoute from './components/router/PublicRouter';
import PrivateRouter from './components/router/PrivateRouter';
import Header from './components/Header';
import SpinnerLoading from './components/common/SpinnerLoading';

const Index = lazy(() => import('./pages/Index'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Favorites = lazy(() => import('./pages/Favorites'));

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <PublicRoute exact path="/">
            <Helmet>
              <title>Inicio | Petgram</title>
              <meta name="description" content="Aplicación web que simula Instagram, pero con operaciones básicas, que son crear usuarios y darle me gusta a post predefinidos." />
            </Helmet>
            <Suspense fallback={ <SpinnerLoading /> }>
              <Index />
            </Suspense>
          </PublicRoute>
          <PublicRoute exact path="/register">
            <Helmet>
              <title>Registrarse | Petgram</title>
              <meta name="description" content="Regístrate y accede al clon de Instagram con operaciones básicas para ver publicaciones de mascotas predefinidas." />
            </Helmet>
            <Suspense fallback={ <SpinnerLoading /> }>
              <Register />
            </Suspense>
          </PublicRoute>
          <PublicRoute exact path="/login">
            <Helmet>
              <title>Iniciar Sesión | Petgram</title>
              <meta name="description" content="Inicia Sesión e interactúa con las publicaciones de mascotas, pudiendo gestionar tus publicaciones favoritas, así como ver publicaciones de mascotas predefinidas." />
            </Helmet>
            <Suspense fallback={ <SpinnerLoading /> }>
              <Login />
            </Suspense>
          </PublicRoute>
          <PrivateRouter path="/home">
            <Helmet>
              <title>Petgram</title>
              <meta name="description" content="Disfruta de las publicaciones existentes de mascotas predefinidas, observa también la cantidad de me gusta por cada publicación, así como su información." />
            </Helmet>
            <Suspense fallback={ <SpinnerLoading /> }>
              <Home />
            </Suspense>
          </PrivateRouter>
          <PrivateRouter exact path="/favorites">
            <Helmet>
              <title>Favoritos | Petgram</title>
              <meta name="description" content="Gestiona las publicaciones a la que le has dado me gusta, y tendrás la opción de desmarcar de igual manera las que no te gusten." />
            </Helmet>
            <Suspense fallback={ <SpinnerLoading /> }>
              <Favorites />
            </Suspense>
          </PrivateRouter>
        </Switch>
        <ToastContainer position="top-right"
          autoClose={ 5000 } hideProgressBar={ false }
          newestOnTop={ false } closeOnClick
          rtl={ false } pauseOnFocusLoss
          draggable={ false } pauseOnHover
        />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;