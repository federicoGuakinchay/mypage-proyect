import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk , ThunkAction , ThunkDispatch } from 'redux-thunk';
import { Action , AnyAction } from 'redux';
import rootReducer from './redux/reducers';
import { RootState } from './redux/reducers'; 
import { AuthState } from './redux/reducers/auth'

const middleware = [thunk];

export interface Root_State {
  auth:  AuthState; // Match this to the authReducer's state shape
  // Add other slices as necessary
}

const store: Store<RootState> = createStore(
  rootReducer,
  // applyMiddleware(...middleware)   to  Production 
  composeWithDevTools(applyMiddleware(...middleware))
);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Define `AppDispatch` based on the store’s `dispatch` type
export type App_Dispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export default store;