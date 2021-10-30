import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Auth from '../../contexts/Auth';

const PrivateRouter = ({children}, props) => {
  const {userData} = useContext(Auth);
  let isLogged = userData === null ? false : true;

  if (isLogged) {
    return <Route { ...props }>{ children }</Route>;
  } else {
    return <Redirect to="/login" />;
  }

};
PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrivateRouter;