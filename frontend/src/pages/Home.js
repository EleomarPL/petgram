import { Text } from '@nextui-org/react';
import {BrowserRouter, Switch} from 'react-router-dom';

import PrivateRouter from '../components/router/PrivateRouter';
import ManagmentSearcher from '../components/views/ManagmentSearcher';
import NavigationPosts from '../components/views/NavigationPosts';

import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Text
          h1
          size={ 60 }
          css={ {
            textGradient: '45deg, $blue600 -20%, $pink600 50%'
          } }
          weight="bold"
        >
          Petgram
        </Text>
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