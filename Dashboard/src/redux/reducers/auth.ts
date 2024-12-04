import  {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_CONFIRM_SUCCESS,
  RESET_PASSWORD_CONFIRM_FAIL,
  SET_AUTH_LOADING,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  LOGOUT,
  REFRESH_FAIL,
  REFRESH_SUCCESS,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  REMOVE_AUTH_LOADING
}from  '../actions/auth/type'

interface AuthState {
  access: string | null;
  refresh: string | null;
  user: { id: number; alias: string; email: string; first_name: string; last_name: string } | null;
  loading: boolean;
  user_loading : boolean;
  picture: string|null;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState:AuthState = {
  access : localStorage.getItem('access'),
  refresh : localStorage.getItem('refresh'),
  user : null,
  loading : false,
  user_loading : false,
  error : null,
  isAuthenticated: false,
  picture:null,
}


type AuthAction = {
  type: string;
  payload:{
  access: string;
  refresh: string;
  user: { id: number; alias: string; email: string; first_name: string; last_name: string } | null;
  };
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  const { type, payload } = action;
  
  switch (type) {
  case USER_LOADED_SUCCESS:
    return {
      ...state,
      user: payload.user,
      isAuthenticated: true, 
      user_loading : false,
      };
  case USER_LOADED_FAIL:
    return {
      ...state,
      user:null,
      isAuthenticated: false, 
      user_loading : false,
      };

    case SET_AUTH_LOADING:
      return { ...state, loading: true, error: null };
      
    case REMOVE_AUTH_LOADING:
      return { ...state, loading: false, error: null };
    
    case AUTHENTICATED_SUCCESS:
      return{
        ...state,
        isAuthenticated:true
      }
    case AUTHENTICATED_FAIL:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');  
      return{
        ...state,
        isAuthenticated:false,
        access: null ,
        refresh: null,
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access);
      localStorage.setItem('refresh', payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: localStorage.getItem('access'),
        refresh: localStorage.getItem('refresh'),
      };
      
    case RESET_PASSWORD_SUCCESS:
    case RESET_PASSWORD_FAIL:
    case RESET_PASSWORD_CONFIRM_SUCCESS:
    case RESET_PASSWORD_CONFIRM_FAIL:
      return { ...state };
      
    case REFRESH_SUCCESS:
      localStorage.setItem('access', payload.access);
      localStorage.setItem('refresh', payload.refresh);
      return{
        ...state,
        access: localStorage.getItem('access'),
        refresh: localStorage.getItem('refresh'),
      }

    case REFRESH_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
        ...state,
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
      };
      
    default:
      return state;
  }
};

export default authReducer;
export type {AuthState}