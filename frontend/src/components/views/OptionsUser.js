import { Avatar, Dropdown, Text } from '@nextui-org/react';
import { useContext } from 'react';

import Auth from '../../contexts/Auth';

const OptionsUser = () => {
  const { userData, setUserData } = useContext(Auth);

  const logout = (type) => {
    if (type === 'logout') {
      window.localStorage.clear();
      setUserData(null);
    }
  };
  return (
    <Dropdown placement="bottom-left">
      <Dropdown.Button css={ {backgroundColor: 'transparent', overflow: 'unset'} }>
        <Avatar
          bordered
          size="sm"
          as="span"
          icon={ <i className="bi bi-person-circle" style={ {fontSize: '1.5rem'} }></i> }
          textColor="white"
        />
      </Dropdown.Button>
      <Dropdown.Menu color="secondary" aria-label="Avatar Actions"
        onAction={ type => logout(type) }
      >
        <Dropdown.Item key="profile"
          css={ { height: '$18', overflow: 'hidden' } }
          textValue="Datos usuario"
        >
          <Text b color="inherit"
            css={ { d: 'flex' } }>
            { userData.name }
          </Text>
          <Text b color="inherit"
            css={ { d: 'flex' } }>
            { userData.lastName }
          </Text>
        </Dropdown.Item>
        <Dropdown.Item key="logout" color="error"
          withDivider type="button"
          icon={ <i className="bi-box-arrow-left" /> }
          variant="shadow"
          textValue="Cerrar sesión"
        >
          Cerrar sesión
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default OptionsUser;