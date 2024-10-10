import { connect } from "react-redux";

function Layout( { children } ){
  return(
    <div className="layout">
      {children}
    </div>
  )
}

const mapStateToProp = state=>({

})

export default connect(mapStateToProp,{

}) (Layout)