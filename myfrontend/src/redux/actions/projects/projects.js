import axios from "axios";
import{
  GET_PROJECTS_LIST_SUCCESS ,
  GET_PROJECTS_LIST_FAIL ,
  GET_PROJECTS_LIST_CATEGORIES_SUCCESS ,
  GET_PROJECTS_LIST_CATEGORIES_FAIL ,
  GET_PROJECTS_SUCCESS, 
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SEARCH_SUCCESS,
  GET_PROJECTS_SEARCH_FAIL,
  GET_AUTHOR_LIST_SUCCESS,
  GET_AUTHOR_LIST_FAIL,
} from './types'

export const get_projects_list  = () =>  async dispatch  => {
  const config={
    headers:{
      'Accept':'application/json',
    }
  };
  try{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/list`, config);
    if (res.status === 200 ){
      dispatch({type: GET_PROJECTS_LIST_SUCCESS, payload: res.data});
    }
    else{
      console.log(res)
      dispatch({type: GET_PROJECTS_LIST_FAIL});
    }
  }catch(err){
    console.log(err)
    dispatch ({
      type:GET_PROJECTS_LIST_FAIL ,
    })
  }
}
export const get_projects_list_page  = (page) =>  async dispatch  => {
  const config={
    headers:{
      'Accept':'application/json',
    }
  };
  try{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects_categories/list?p=${page}`, config);
    console.log('get_projects_list_page', res)
    if (res.status === 200 ){
      dispatch({type: GET_PROJECTS_LIST_SUCCESS, payload: res.data});
    }
    else{
      console.log(res)
      dispatch({type: GET_PROJECTS_LIST_FAIL});
    }
  }catch(err){
    console.log(err)
    dispatch ({
      type:GET_PROJECTS_LIST_FAIL ,
    })
  }
}
export const get_projects_list_categories  = (slug) =>  async dispatch  => {
  const config={
    headers:{
      'Accept':'application/json',
    }
  };
  try{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/list_by_category?slug=${slug}`, config);
    console.log('get_projects_list_categories', res)
    if (res.status === 200 ){
      dispatch({type: GET_PROJECTS_LIST_CATEGORIES_SUCCESS, payload: res.data});
    }
    else{
      console.log(res)
      dispatch({type: GET_PROJECTS_LIST_CATEGORIES_FAIL});
    }
  }catch(err){
    console.log(err)
    dispatch ({
      type:GET_PROJECTS_LIST_CATEGORIES_FAIL ,
    })
  }
}
export const get_projects_list_categories_page  = (slug,page) =>  async dispatch  => {
  const config={
    headers:{
      'Accept':'application/json',
    }
  };
  try{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/list_by_category?slug=${slug}&p=${page}`, config);
    if (res.status === 200 ){
      dispatch({type: GET_PROJECTS_LIST_CATEGORIES_SUCCESS, payload: res.data});
    }
    else{
      console.log(res)
      dispatch({type: GET_PROJECTS_LIST_CATEGORIES_FAIL});
    }
  }catch(err){
    console.log(err)
    dispatch ({
      type:GET_PROJECTS_LIST_CATEGORIES_FAIL ,
    })
  }
}

export const get_PROJECTS  = (slug) =>  async dispatch  => {
  const config={
    headers:{
      'Accept':'application/json',
    }
  };
  try{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/detail/${slug}`, config);
    if (res.status === 200 ){
      dispatch({type: GET_PROJECTS_SUCCESS, payload: res.data});
    }
    else{
      console.log(res)
      dispatch({type: GET_PROJECTS_FAIL});
    }
  }catch(err){
    console.log(err)
    dispatch ({
      type:GET_PROJECTS_FAIL ,
    })
  }
}

export const get_projects_search  = (search_term) =>  async dispatch  => {
  const config={
    headers:{
      'Accept':'application/json',
    }
  };
  try{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/search?search=${search_term}`, config);
    if (res.status === 200 ){
      dispatch({type: GET_PROJECTS_SEARCH_SUCCESS, payload: res.data});
    }
    else{
      console.log(res)
      dispatch({type: GET_PROJECTS_SEARCH_FAIL});
    }
  }catch(err){
    console.log(err)
    dispatch ({
      type:GET_PROJECTS_SEARCH_FAIL ,
    })
  }
}
export const get_projects_search_page  = (search_term,page) =>  async dispatch  => {
  const config={
    headers:{
      'Accept':'application/json',
    }
  };
  try{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/search?search=${search_term}?p=${page}`, config);
    if (res.status === 200 ){
      dispatch({type: GET_PROJECTS_SEARCH_SUCCESS, payload: res.data});
    }
    else{
      console.log(res)
      dispatch({type: GET_PROJECTS_SEARCH_FAIL});
    }
  }catch(err){
    console.log(err)
    dispatch ({
      type:GET_PROJECTS_SEARCH_FAIL ,
    })
  }
}

export const get_projects_list_author  = (slug) =>  async dispatch  => {
  const config={
    headers:{'Accept':'application/json',}
  };
  try{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/author/${slug}`, config);
    if (res.status === 200 ){
      dispatch({type: GET_AUTHOR_LIST_SUCCESS, payload: res.data});
    }
    else{
      console.log(res)
      dispatch({type: GET_AUTHOR_LIST_FAIL});
    }
  }catch(err){
    console.log(err)
    dispatch ({type:GET_AUTHOR_LIST_FAIL,})
  }
}
export const get_projects_list_author_page  = (slug,page) =>  async dispatch  => {
  const config={
    headers:{
      'Accept':'application/json',
    }
  };
  try{
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/list_by_category?slug=${slug}&p=${page}`, config);
    if (res.status === 200 ){
      dispatch({type: GET_AUTHOR_LIST_SUCCESS, payload: res.data});
    }
    else{
      console.log(res)
      dispatch({type: GET_AUTHOR_LIST_FAIL});
    }
  }catch(err){
    console.log(err)
    dispatch ({type:GET_AUTHOR_LIST_FAIL,})
  }
}