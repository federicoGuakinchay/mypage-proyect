import { connect, ConnectedProps } from "react-redux";
import { ReactNode } from "react";
import { Root_State } from "../store";
import RouteName from "./navegation/route_name";

type LayoutProps = {
  children?: ReactNode;
} & ConnectedProps<typeof connector>;

const MyFooter: React.FC<LayoutProps> = ({ user }) => {
  return (
  <footer className="flex justify-between absolute available bottom-[5px] gap-[10px] mx-[10px] absolute">
    <div className="max-w-full text-left rounded-3xl select-none leading-8 text-xl  font-medium  px-[15px] select-none text-red text-[--url-txt] bg-[--bar-bg]"
      > <RouteName/> </div>
    <div className="footer h-[35px] rounded-3xl select-none w-[350px] leading-8 text-xl self-end font-medium side-bar flex justify-center gap-[5%] side-bar__item "
    role="button"
    tabIndex={0}>
      <span>{user?.first_name || 'Guest'}</span> | <span>{user?.role?.toLocaleLowerCase()}</span>
    </div>
  </footer>
  );
};

const mapStateToProps = (state: Root_State) => ({
  user: state.auth.user,
});

const connector = connect(mapStateToProps);
export default connector(MyFooter);