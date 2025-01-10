import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import { check_authenticated, refresh } from "../../redux/actions/auth/auth";
import { Root_State } from "../../store";
import { logout } from '../../redux/actions/auth/auth';


type LayoutProps = {
  children: ReactNode;
} & ConnectedProps<typeof connector>;

const Layout: React.FC<LayoutProps> = ({ 
  children,
  check_authenticated,
  isAuthenticated,
  user,
  refresh,
  logout,
}) => {
  const navigate = useNavigate();
  console.log('login')
  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    const refreshToken = localStorage.getItem('refresh');

    // Authentication and token refresh logic
    if (!isAuthenticated) {
      if (accessToken) {
        console.log('Attempting to authenticate with access token');
        check_authenticated(); // Authenticate with access token
      } else if (refreshToken) {
        console.log('Attempting to refresh token');
        refresh(); // Refresh tokens
      } else {
        console.log('No tokens available. Redirecting to logout.');
        navigate('/logout'); // Redirect if no tokens exist
      }
    } else{
      navigate('/home'); 
    }
  }, [isAuthenticated, check_authenticated, refresh, navigate]);

  useEffect(() => {
    let isMounted = true; // Flag to prevent updates if unmounted
  
    const handleUserRefresh = async () => {
      if ( user === null && isAuthenticated ) {
        try {
          console.log('User is authenticated but not loaded. Refreshing user data.');
          await refresh(); // Fetch and update user data
          if (isMounted) {
            navigate('/home'); // Redirect to home only if still mounted
          }
        } catch (error) {
          console.error('Failed to refresh user data. Logging out.', error);
          if (isMounted) {
            logout(); // Logout the user
            navigate('/login'); // Redirect to login
          }
        }
      }
    };
  
    handleUserRefresh();
  
    return () => {
      isMounted = false; // Cleanup on component unmount
    };
  }, [user, isAuthenticated, refresh, logout, navigate]);
  

  return <>{children}</>;
};

// Map Redux state to props
const mapStateToProps = (state: Root_State) => ({
  user_loading: state.auth.user_loading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

// Connect component to Redux
const connector = connect(mapStateToProps, {
  check_authenticated,
  refresh,
  logout,
});

export default connector(Layout);
