import {combineReducers} from 'redux';
import blog_categories  from  './blogcategories'
import blog from './blog'
import Projects from './projects';
import ProjectsCategories from './projectscategories'
export default combineReducers({
    blog_categories,
    blog,
    Projects,
    ProjectsCategories,
})