import{
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_CONFIRM_SUCCESS,
  RESET_PASSWORD_CONFIRM_FAIL,
  SET_AUTH_LOADING,
  AUTHENTICATED_FAIL,
  LOGOUT,
  REFRESH_FAIL,
  REFRESH_SUCCESS,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  REMOVE_AUTH_LOADING,
  AUTHENTICATED_SUCCESS,
  FETCH_USER_SETTINGS_SUCCESS,
  FETCH_USER_SETTINGS_FAIL,
  UPDATE_USER_SETTINGS_SUCCESS,
  UPDATE_USER_SETTINGS_FAIL,
  FETCH_ALL_USER_SETTINGS_SUCCESS,
  FETCH_ALL_USER_SETTINGS_FAIL,
} from './type'
import axios from "axios";
import  { App_Dispatch , AppThunk  } from "@store";

export const login = (email: string, password: string):AppThunk => async (dispatch: App_Dispatch): Promise<void> => {
  console.log('Attempting to log in...');
  dispatch({type: SET_AUTH_LOADING,});

  const config = {
    headers: {'Content-Type': 'application/json',},
  };

  const body = JSON.stringify({ email,password,});

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/jwt/create`, body, config);
    if (response.status === 200){
      dispatch({type: LOGIN_SUCCESS,payload: response.data,});
      dispatch(load_user())
    }else{
      dispatch({type: LOGIN_FAIL,});
    }
  } catch (error) {
    console.error("Login error:", error?.response?.data || error.message || error);
    dispatch({type: LOGIN_FAIL,});
  } finally {
    dispatch({ type: REMOVE_AUTH_LOADING });
  }
};

export const  check_authenticated= ():AppThunk => async (dispatch: App_Dispatch): Promise<void> => {
  if (localStorage.getItem('access')){
    const config ={
      headers:{
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        },
    };
    const body  = JSON.stringify({
      token: localStorage.getItem('access'),
    })
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/jwt/verify/`,body,config)
      if (response.status === 200){
        dispatch({type:  AUTHENTICATED_SUCCESS,});
      }else{
        dispatch({type: LOGIN_FAIL,})
      };
    } catch (error) {
      console.log(error)
      dispatch({type: LOGIN_FAIL,});
    }
  }else{
    dispatch({type:  AUTHENTICATED_FAIL,});
  }
}

export  const  refresh = ():AppThunk => async (dispatch: App_Dispatch): Promise<void> => {
  const refreshToken = localStorage.getItem('refresh');
  if (refreshToken){
    const config ={
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
    };
    const body  = JSON.stringify({refresh: refreshToken });
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/jwt/refresh`,body, config);
      if (response.status === 200){
        dispatch({
          type:  REFRESH_SUCCESS,
          payload: {
            access: response.data.access,
            refresh: response.data.refresh,
          }
        });
      }else{
        dispatch({type: REFRESH_FAIL,});
      }
    }catch(err){
      console.log(err)
      dispatch({type: REFRESH_FAIL,});
    }
  }
}

export  const  reset_password = (email:string) => async (dispatch: App_Dispatch): Promise<void> => {
  dispatch({type: SET_AUTH_LOADING});
  const config ={
    headers:{'Content-Type': 'application/json',},
  };
  
  const body  = JSON.stringify({ email: email });
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/users/reset_password/`,body,config)
    if (response.status === 204){
      dispatch({type:  RESET_PASSWORD_SUCCESS,});
      //dispatch({setAlert('we are send you a mail','green')});
    }else{
      dispatch({type: RESET_PASSWORD_FAIL});
      //dispatch({setAlert('Server ERROR','error')});
    }
  }catch(err){
    console.log(err)
    dispatch({type: RESET_PASSWORD_FAIL});
  }finally{
    dispatch({type: REMOVE_AUTH_LOADING});
    //dispatch({setAlert(err.request.response,'error')});
  }
}

export const reset_password_confirm  = (uid:string,token:string,new_password:string,re_new_password:string) => async (dispatch : App_Dispatch): Promise<void> =>{
  dispatch({type: SET_AUTH_LOADING});
  const config ={
    headers:{'Content-Type': 'application/json',},
  };
  const body  = JSON.stringify({ uid,token,new_password,re_new_password });
  if ( new_password !== re_new_password ){
    console.log('diferents password')
    dispatch({type: RESET_PASSWORD_CONFIRM_FAIL});
    dispatch({type: REMOVE_AUTH_LOADING})
    return;
  }
  else{
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/users/reset_password_confirm/`, body, config);
      if (response.status === 204){
        dispatch({type: RESET_PASSWORD_CONFIRM_SUCCESS});
        // dispatch({setAlert('Password Reset Success','success')});
      }
      else{
        dispatch({type: RESET_PASSWORD_CONFIRM_FAIL});
      }
    }
    catch(err){
      if (axios.isAxiosError(err)) {
        console.error('Error Message:', err.message);
        console.error('Response Data:', err.response?.data); 
      } else {
        console.error('Unexpected Error:', err);
      }
      dispatch({type: RESET_PASSWORD_CONFIRM_FAIL});
    }finally{
      dispatch({type: REMOVE_AUTH_LOADING})
    }
  }
}

export const logout = ():AppThunk =>  async (dispatch: App_Dispatch) =>{
  dispatch({type: LOGOUT})
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
}

export const load_user = ():AppThunk => async (dispatch : App_Dispatch)=>{
  if(localStorage.getItem('access')){
    const config = {
      headers: {
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Content-Type': 'application/json'
      }
    };
    try{
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/users/me/`,config);
      if (response.status === 200){
        dispatch({
          type: USER_LOADED_SUCCESS,
          payload: {user: response.data}
        });
      }else{dispatch({type: USER_LOADED_FAIL})}
    }catch(err){
      console.log(err)
      dispatch({type: USER_LOADED_FAIL});
    }
    try {
      const settingsResponse = await axios.get(`${import.meta.env.VITE_API_URL}/api/user-settings/`, config);
      if (settingsResponse.status === 200) {
        dispatch({
          type: FETCH_USER_SETTINGS_SUCCESS,
          payload: { userSettings: settingsResponse.data },
        });
        } else {
          dispatch({ type: FETCH_USER_SETTINGS_FAIL });
        }
    }catch(err){
    console.log(err)
    dispatch({type: FETCH_USER_SETTINGS_FAIL});
    throw err;
  }
  }else{ dispatch({type:USER_LOADED_FAIL}) }
}
