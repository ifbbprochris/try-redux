import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


const dafaultState = {
  posts,
  comments
};

const store = createStore(rootReducer,dafaultState);

export const history = syncHistoryWithStore(browserHistory,store);

if(module.hot) {
  module.hot.accept('./reducers', ()=>{
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;