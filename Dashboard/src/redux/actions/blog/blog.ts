import axios from "axios";
import {
  GET_BLOG_LIST_SUCCESS,
  GET_BLOG_LIST_FAIL,
  GET_BLOG_LIST_CATEGORIES_SUCCESS,
  GET_BLOG_LIST_CATEGORIES_FAIL,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
  GET_BLOG_SEARCH_SUCCESS,
  GET_BLOG_SEARCH_FAIL,
  GET_AUTHOR_BLOG_LIST_SUCCESS,
  GET_AUTHOR_BLOG_LIST_FAIL,
} from './types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '@redux/reducers';
import { AppDispatch } from '@store';

// Type for asynchronous action result
import { AnyAction } from 'redux';
type ThunkResult<R> = ThunkAction<R, RootState, unknown, AnyAction>;

// Function to get the blog list
export const get_blog_list = (): ThunkResult<void> => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      'Accept': 'application/json',
    }
  };
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/list`, config);
    if (res.status === 200) {
      dispatch({ type: GET_BLOG_LIST_SUCCESS, payload: res.data });
    } else {
      console.log(res);
      dispatch({ type: GET_BLOG_LIST_FAIL });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_BLOG_LIST_FAIL });
  }
};

export const get_blog_list_page = (page: number): ThunkResult<void> => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      'Accept': 'application/json',
    }
  };
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog_categories/list?p=${page}`, config);
    if (res.status === 200) {
      dispatch({ type: GET_BLOG_LIST_SUCCESS, payload: res.data });
    } else {
      console.log(res);
      dispatch({ type: GET_BLOG_LIST_FAIL });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_BLOG_LIST_FAIL });
  }
};

export const get_blog_list_categories = (slug: string): ThunkResult<void> => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      'Accept': 'application/json',
    }
  };
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/list_by_category?slug=${slug}`, config);
    if (res.status === 200) {
      dispatch({ type: GET_BLOG_LIST_CATEGORIES_SUCCESS, payload: res.data });
    } else {
      console.log(res);
      dispatch({ type: GET_BLOG_LIST_CATEGORIES_FAIL });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_BLOG_LIST_CATEGORIES_FAIL });
  }
};

export const get_blog_list_categories_page = (slug: string, page: number): ThunkResult<void> => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      'Accept': 'application/json',
    }
  };
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/list_by_category?slug=${slug}&p=${page}`, config);
    if (res.status === 200) {
      dispatch({ type: GET_BLOG_LIST_CATEGORIES_SUCCESS, payload: res.data });
    } else {
      console.log(res);
      dispatch({ type: GET_BLOG_LIST_CATEGORIES_FAIL });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_BLOG_LIST_CATEGORIES_FAIL });
  }
};

export const get_blog = (slug: string): ThunkResult<void> => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      'Accept': 'application/json',
    }
  };
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/detail/${slug}`, config);
    if (res.status === 200) {
      dispatch({ type: GET_BLOG_SUCCESS, payload: res.data });
    } else {
      console.log(res);
      dispatch({ type: GET_BLOG_FAIL });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_BLOG_FAIL });
  }
};

export const get_blog_search = (search_term: string): ThunkResult<void> => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      'Accept': 'application/json',
    }
  };
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/search?search=${search_term}`, config);
    if (res.status === 200) {
      dispatch({ type: GET_BLOG_SEARCH_SUCCESS, payload: res.data });
    } else {
      console.log(res);
      dispatch({ type: GET_BLOG_SEARCH_FAIL });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_BLOG_SEARCH_FAIL });
  }
};

export const get_blog_search_page = (search_term: string, page: number): ThunkResult<void> => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      'Accept': 'application/json',
    }
  };
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/search?search=${search_term}&p=${page}`, config);
    if (res.status === 200) {
      dispatch({ type: GET_BLOG_SEARCH_SUCCESS, payload: res.data });
    } else {
      console.log(res);
      dispatch({ type: GET_BLOG_SEARCH_FAIL });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_BLOG_SEARCH_FAIL });
  }
};

// Author Blog List 
export const get_author_blog_list = (): ThunkResult<void> => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Authorization': `JWT ${localStorage.getItem('access')}`
    }
  };
  console.log('get_author_blog_list')
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/author_list`, config);
    if (res.status === 200) {
      dispatch({ type: GET_AUTHOR_BLOG_LIST_SUCCESS, payload: res.data });
    } else {
      console.log(res);
      dispatch({ type: GET_AUTHOR_BLOG_LIST_FAIL });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_AUTHOR_BLOG_LIST_FAIL });
  }
};

export const get_author_blog_list_page = (page: number): ThunkResult<void> => async (dispatch: AppDispatch) => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Authorization': `JWT ${localStorage.getItem('access')}`
    }
  };
  console.log('get_author_blog_list_page')
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/author_list?p=${page}`, config);
    if (res.status === 200) {
      dispatch({ type: GET_AUTHOR_BLOG_LIST_SUCCESS, payload: res.data });
    } else {
      console.log(res);
      dispatch({ type: GET_AUTHOR_BLOG_LIST_FAIL });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_AUTHOR_BLOG_LIST_FAIL });
  }
};
