import { connect } from "react-redux";
import { motion } from "framer-motion";

function Layout( { children } ){
  return(
    <motion.div
    initial={{opacity:0, transition:{duration:.6}}}
    animate={{opacity:1, transition:{duration:1.8}}}
    exit=   {{opacity:0, transition:{duration:.6}}}>
      {children}
    </motion.div>
  )
}

const mapStateToProp = state=>({

})

export default connect(mapStateToProp,{

}) (Layout)