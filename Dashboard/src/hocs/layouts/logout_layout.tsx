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
    const handleAuthentication = async () => {
      console.log("Is Authenticated:", isAuthenticated);
  
      if (isAuthenticated === false) {
        const accessToken = localStorage.getItem("access");
        const refreshToken = localStorage.getItem("refresh");
  
        console.log("Access Token:", accessToken);
        console.log("Refresh Token:", refreshToken);
  
        if (accessToken) {
          try {
            await check_authenticated();
            console.log('check_authenticated')
          } catch (error) {
            console.error("Error during check_authenticated:", error);
            navigate("/logout"); // Redirect on failure
          }
        } else if (refreshToken) {
          try {
            await refresh();
            console.log('refreshToken')
          } catch (error) {
            console.error("Error during refresh:", error);
            navigate("/logout"); // Redirect on failure
          }
        } else {
          console.log("No valid tokens. Redirecting to logout.");
          navigate("/logout");
        }
      }
    };
  
    handleAuthentication();
  }, [isAuthenticated, check_authenticated, refresh, navigate]);
  
  useEffect(() => {
    const loaddingUser = async () => {
      if (user === null && isAuthenticated) {
        try {
          await load_user();
        } catch (error) {
          console.error("Failed to load user",error);
          logout();
          navigate("/logout");
        }
      }
    }
    loaddingUser()
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
