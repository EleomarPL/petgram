import { render } from 'react-dom';
import { NextUIProvider } from '@nextui-org/react';

import App from './App';

render(
  <NextUIProvider>
    <App />
  </NextUIProvider>,
  document.getElementById('root')
);
