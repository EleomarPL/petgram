import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';
import 'react-toastify/dist/ReactToastify.css';

import './styles/index.css';

import {BrowserRouter, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {lazy, Suspense} from 'react';

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
            <Suspense fallback={ <SpinnerLoading /> }>
              <Index />
            </Suspense>
          </PublicRoute>
          <PublicRoute exact path="/register">
            <Suspense fallback={ <SpinnerLoading /> }>
              <Register />
            </Suspense>
          </PublicRoute>
          <PublicRoute exact path="/login">
            <Suspense fallback={ <SpinnerLoading /> }>
              <Login />
            </Suspense>
          </PublicRoute>
          <PrivateRouter path="/home">
            <Suspense fallback={ <SpinnerLoading /> }>
              <Home />
            </Suspense>
          </PrivateRouter>
          <PrivateRouter exact path="/favorites">
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