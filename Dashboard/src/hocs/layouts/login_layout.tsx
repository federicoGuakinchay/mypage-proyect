import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactNode , useEffect } from "react";
import { check_authenticated , refresh  } from "../../redux/actions/auth/auth";
import { Root_State } from "../../store";


type LayoutProps = {
  children: ReactNode;
} & ConnectedProps<typeof connector>;

const Layout: React.FC<LayoutProps> = ({ 
  children,
  check_authenticated,
  isAuthenticated,
  user,
  refresh,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) { navigate('/home'); }
    else{
      check_authenticated()
      if (isAuthenticated) { navigate('/home'); }
    }
  }, [check_authenticated, isAuthenticated, navigate]);
  useEffect(() => {
    console.log('isAuthenticated logIN_layout',isAuthenticated)
    if (isAuthenticated === true) { navigate('/home'); }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (user === null) refresh()
  }, [user, refresh]);

    return (
    <div >
      {children}
    </div>
  );
};

const mapStateToProps = (state: Root_State) => ({
  user_loading:state.auth.user_loading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

const connector = connect(mapStateToProps, {
  check_authenticated,
  refresh,
});

// Export the connected component
const ConnectedLayout = connector(Layout);

export default ConnectedLayout;
