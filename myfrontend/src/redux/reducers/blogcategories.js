import {
  GET_BLOG_CATEGORIES_FAIL,
  GET_BLOG_CATEGORIES_SUCCESS,
} from '../actions/blog_categories/types'
const initialState = {
  categories:null
}

export default function  blog_categories(state=initialState, action ){
  const  {type,payload}=action;
  switch (type) {
    case GET_BLOG_CATEGORIES_SUCCESS:
      return { ...state, categories: payload.BlogCategories }
    case GET_BLOG_CATEGORIES_FAIL:
      return { ...state, categories: [] }
    default:
      return state 
  }
}