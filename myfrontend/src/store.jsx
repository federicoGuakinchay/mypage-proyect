import { createStore, applyMiddleware}from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from './redux/reducers/'
import { composeWithDevTools } from '@redux-devtools/extension'

const initialState = {}
const middlewarre = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  // applyMiddleware(...middleware)   to  Production 
  composeWithDevTools(applyMiddleware(...middlewarre))
)
export default store