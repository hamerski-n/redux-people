import React from 'react';
import {render} from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {compose, createStore, applyMiddleware} from 'redux';
import  createSagaMiddleware from 'redux-saga';
import {routeReducer} from "./redux/reducers/routeReducer";
import {Provider} from 'react-redux';
import {rootSaga} from "./redux/sagas/rootSaga";

const saga = createSagaMiddleware();
const store = createStore(routeReducer, compose(
    applyMiddleware(
        saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(rootSaga)

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
