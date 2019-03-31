import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';


const initialState = {};

const middlewares: any = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);


export default store;
