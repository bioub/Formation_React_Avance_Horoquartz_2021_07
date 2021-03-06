import './index.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";

import App from './components/App/App';
import { PrenomProvider } from './context/PrenomContext';
import * as serviceWorker from './serviceWorker';
import { todosReducer } from './todos/reducers';
import { usersReducer } from './users/reducers';

ReactDOM.render(
  <StrictMode>
    <PrenomProvider>
      <Provider store={configureStore({
        reducer: {
          todos: todosReducer,
          users: usersReducer,
        },
      })}>
        <App />
      </Provider>
    </PrenomProvider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
