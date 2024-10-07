import { connect } from "react-redux"

function MyFooter(){
  return (
    <div className="footer">
      <div>
        <div>logo</div>
        <div>visit</div>
        <div>call us</div>
        <div>details</div>
        <div>follow</div>
      </div>
      <div> lenguages  <div>leng </div></div>
      <div>
        <div>Cookie Policy</div>
        <div>Privacy Policy</div>
      </div>
      <div>copyright </div>
    </div>
  )
  
}

const mapStateToProp=state=>({

})

export default connect(mapStateToProp, {

}) (MyFooter)