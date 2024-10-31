import { connect, ConnectedProps } from "react-redux";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import type  RootState  from "../../store"; // Ensure this is typed

type LayoutProps = {
  children: ReactNode;
} & ConnectedProps<typeof connector>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};

// Removed unused state parameter
const mapStateToProps = (state: RootState) => ({});

const connector = connect(mapStateToProps, {});

// Export the connected component
const ConnectedLayout = connector(Layout);

export default ConnectedLayout;
