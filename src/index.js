import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

import rootReducer from "./store";
import rootSaga from './sagas';
import './styles/index.scss';
import App from './App';


const sagaMiddleware = createSagaMiddleware();

const store = createStore (rootReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
                        document.getElementById('root')
);
