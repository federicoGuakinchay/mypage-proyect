import {
  GET_PROJECTS_CATEGORIES_FAIL,
  GET_PROJECTS_CATEGORIES_SUCCESS,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAIL,
} from '../actions/projects_categories/types'

const initialState = {
  categories:[],
  languages:[]
}

export default function  ProjectsCategories(state=initialState, action ){
  const  {type,payload}=action;
  switch (type) {
    case GET_PROJECTS_CATEGORIES_SUCCESS:
      return { ...state, categories: payload.ProjectsCategories }
    case GET_PROJECTS_CATEGORIES_FAIL:
      return { ...state, projects_categories: [] }
    case GET_LANGUAGES_SUCCESS:
      return { ...state, languages: payload.Languages }
    case GET_LANGUAGES_FAIL:
      return { ...state, projects_categories: [] }
    default:
      return state 
  }
}