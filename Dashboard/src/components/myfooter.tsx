import { connect, ConnectedProps } from "react-redux";
import { ReactNode } from "react";
import { Root_State } from "../store";

type LayoutProps = {
  children?: ReactNode;
} & ConnectedProps<typeof connector>;

const MyFooter: React.FC<LayoutProps> = ({ user }) => {
  return (
    <footer className="footer h-[35px] mr-2 rounded-3xl select-none w-9/12 leading-8 text-xl self-end font-medium side-bar flex justify-center gap-[5%]">
      <span>{user?.first_name || 'Guest'}</span> | 
      <span>user status</span>
    </footer>
  );
};

const mapStateToProps = (state: Root_State) => ({
  user: state.auth.user,
});

const connector = connect(mapStateToProps);
export default connector(MyFooter);
