import { combineReducers } from 'redux';
import authReducer from './auth'
import blog_categories  from  './blogcategories'
import blog from './blog'

const rootReducer = combineReducers({
  auth:authReducer,
  blog_categories,
  blog:blog
});
export type RootState = ReturnType<typeof rootReducer>; // Automatically infer the state type
export default rootReducer;