import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ fixed import
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // no need for ../node_modules

// Get root container
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();