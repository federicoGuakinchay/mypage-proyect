import {combineReducers} from 'redux';
import blog_categories  from  './blogcategories'
import blog from './blog'

export default combineReducers({
    blog_categories,
    blog,
})