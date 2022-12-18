import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Navbar } from '@nextui-org/react';
import styled from 'styled-components';

import AuthContext from '../contexts/Auth';
import '../styles/header.css';
import OptionsUser from './views/OptionsUser';

const Header = () => {
  const {userData} = useContext(AuthContext);
  
  if (userData !== null)
    return <PrivateHeader />;
  else
    return <PublicHeader />;
};

const PrivateHeader = () => {
  return (
    <NavPrivate>
      <Container
        css={ {display: 'flex', justifyContent: 'center'} }
      >
        <Button.Group color="primary" bordered
          size="lg"
        >
          <Button color="primary" auto
            ghost as={ NavLink }
            activeClassName="active-header"
            to="/home"
          >
            <i className="bi bi-house-door-fill"></i>
          </Button>
          <Button color="primary" auto
            ghost as={ NavLink }
            activeClassName="active-header"
            to="/favorites"
          >
            <i className="bi bi-heart-fill"></i>
          </Button>
          <OptionsUser />
        </Button.Group>
      </Container>
    </NavPrivate>
  );
};

const NavPrivate = styled.nav`
  position: fixed;
  left: 0; 
  right: 0;
  bottom: 0;
  margin-left: auto; 
  margin-right: auto;
  
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  width: 80%;
  z-index: 1;
`;

const PublicHeader = () => {
  const collapseItems = [
    { text: 'Inicio', href: '/' },
    { text: 'Registrarse', href: '/register' },
    { text: 'Iniciar sesión', href: '/login' }
  ];

  return (
    <Navbar isBordered variant="sticky"
      isCompact
    >
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand>
        <NavLink to="/"
          style={ {color: 'deeppink'} }
        >
          <TitleHeader>PetGram</TitleHeader>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs"
        variant="highlight"
      >
        <Navbar.Link as={ NavLink } to="/"
          activeClassName="active-header" exact
        >
          Inicio
        </Navbar.Link>
        <Navbar.Link as={ NavLink } to="/register"
          activeClassName="active-header"
        >
          Registrarse
        </Navbar.Link>
        <Navbar.Link to="/login"
          as={ NavLink }
          activeClassName="active-header"
        >
          Iniciar Sesión
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        { collapseItems &&
          collapseItems.map((item) =>
            <Navbar.CollapseItem
              key={ item.href }
              activeColor="warning"
            >
              <NavLink to={ item?.href }
                activeClassName="active-header" exact
                style={ {
                  minWidth: '100%',
                  padding: '10px 0'
                } }
              >
                { item.text }
              </NavLink>
            </Navbar.CollapseItem>
          )
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

const TitleHeader = styled.strong`
  font-size: 1.5rem;
`;

export default Header;