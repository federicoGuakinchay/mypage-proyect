import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactNode , useEffect } from "react";
import { check_authenticated, refresh ,load_user} from "../../redux/actions/auth/auth";
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
  load_user,
  logout,
}) => {

  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthenticated)
    if (!isAuthenticated) {
      const accessToken =  localStorage.getItem("access");
      const refreshToken = localStorage.getItem("refresh");

      if (accessToken) {
        check_authenticated();
      } else if (refreshToken) {
        refresh();
      } else {
        navigate("/logout");
      }
    }
  }, [isAuthenticated, check_authenticated, refresh, navigate]);
  
  useEffect(() => {
    if (user === null && isAuthenticated) {
      try {
        load_user();
      } catch (error) {
        console.error("Failed to load user",error);
        logout();
        navigate("/logout");
    }
  }
  }, [user, isAuthenticated, load_user, logout, navigate]);

  return (
    <div >
      {children}
    </div>
  );
};

// Removed unused state parameter
const mapStateToProps = (state: Root_State) => ({
  user_loading:state.auth.user_loading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

const connector = connect(mapStateToProps, {
  check_authenticated,
  refresh,
  load_user,
  logout,
});

// Export the connected component
const ConnectedLayout = connector(Layout);

export default ConnectedLayout;
