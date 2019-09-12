import { createStore, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

const store = createStore(
  rootReducer(),
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;