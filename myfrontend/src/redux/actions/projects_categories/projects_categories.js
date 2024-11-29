import axios from 'axios'
import{
  GET_PROJECTS_CATEGORIES_FAIL,
  GET_PROJECTS_CATEGORIES_SUCCESS,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAIL,
} from './types'

export const get_projects_categories = ()=> async dispatch =>{
  const config ={
    headers:{
      'Accept':'application/json'
  }
};
try{
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects_categories/categories_list`, config);
  if (res.status === 200){
    dispatch({type:GET_PROJECTS_CATEGORIES_SUCCESS,payload:res.data})
  }else{
    console.error("Error:", res);
    dispatch({type:GET_PROJECTS_CATEGORIES_FAIL})
  }

}catch(err){
  console.error("Error:", err);
  dispatch({
    type:GET_PROJECTS_CATEGORIES_FAIL
  })
}
}

export const get_languages = ()=> async dispatch =>{
  const config ={
    headers:{
      'Accept':'application/json'
  }
};
try{
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects_categories/languages_list`, config);
  if (res.status === 200){
    dispatch({type:GET_LANGUAGES_SUCCESS,payload:res.data})
  }else{
    console.error("Error:", res);
    dispatch({type:GET_LANGUAGES_FAIL})
  }
}catch(err){
  console.error("Error:", err);
  dispatch({
    type:GET_LANGUAGES_FAIL
  })
}
}