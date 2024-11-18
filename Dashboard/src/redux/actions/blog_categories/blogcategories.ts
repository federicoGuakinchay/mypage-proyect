import axios from 'axios'
import{
  GET_BLOG_CATEGORIES_FAIL,
  GET_BLOG_CATEGORIES_SUCCESS
} from './types'
import { AppDispatch } from '@store';


export const get_categories = ()=> async (dispatch : AppDispatch) =>{
  const config ={ headers:{ 'Accept':'application/json' } }
try{
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog_categories/list`, config);
  if (res.status === 200){
    dispatch({type:GET_BLOG_CATEGORIES_SUCCESS,payload:res.data})
  }else{
    console.error("Error:", res);
    dispatch({type:GET_BLOG_CATEGORIES_FAIL})
  }

}catch(err){
  console.error("Error:", err);
  dispatch({
    type:GET_BLOG_CATEGORIES_FAIL
  })
}
}