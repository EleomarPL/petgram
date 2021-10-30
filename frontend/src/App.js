import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';

import './styles/index.css';

import { AuthProvider } from './contexts/Auth';

const App = () => {
  return (
    <AuthProvider>

    </AuthProvider>
  );
};

export default App;