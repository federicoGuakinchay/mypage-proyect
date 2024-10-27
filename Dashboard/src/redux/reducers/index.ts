import { combineReducers } from 'redux';
// Import individual reducers
//import someReducer from './someReducer';

const rootReducer = combineReducers({
  // other reducers
});

export type RootState = ReturnType<typeof rootReducer>; // Automatically infer the state type
export default rootReducer;