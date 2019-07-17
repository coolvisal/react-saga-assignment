import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store";
import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();
const reduxStore = configureStore(sagaMiddleware);
sagaMiddleware.run(rootSaga);

ReactDOM.render(<ReduxProvider store={reduxStore}>
    <App />
</ReduxProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
