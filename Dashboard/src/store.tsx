import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import rootReducer from './redux/reducers';
import { RootState } from './redux/reducers'; 

const middleware = [thunk];

const store: Store<RootState> = createStore(
  rootReducer,
  // applyMiddleware(...middleware)   to  Production 
  composeWithDevTools(applyMiddleware(...middleware))
);
// Define `AppDispatch` based on the store’s `dispatch` type
export type AppDispatch = typeof store.dispatch;

export default store;