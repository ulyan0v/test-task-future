import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './reducers/globalReducer';
import tableReducer from './reducers/tableReducer';

const reducers = combineReducers({
  global: globalReducer,
  table: tableReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;