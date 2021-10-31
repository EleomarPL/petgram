import {BrowserRouter, Switch} from 'react-router-dom';

import PrivateRouter from '../components/router/PrivateRouter';
import ManagmentSearcher from '../components/views/ManagmentSearcher';
import NavigationPosts from '../components/views/NavigationPosts';

import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <h1 style={ {color: 'deeppink'} }>PetGram</h1>
        <NavigationPosts />
        <Switch>
          <PrivateRouter path="/home">
            <ManagmentSearcher />
          </PrivateRouter>
          <PrivateRouter path="/home/:searcher">
            <ManagmentSearcher />
          </PrivateRouter>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Home;