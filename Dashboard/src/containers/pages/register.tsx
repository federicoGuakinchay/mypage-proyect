import { div } from "framer-motion/client"
import { useNavigate } from 'react-router-dom';

function Register(){
  const navigate = useNavigate();
  // var name = document.getElementById("name").value;
  // var email = document.getElementById("email").value;
  // var password = document.getElementById("password").value;
  // var password2 = document.getElementById("password2").value;
  // var phone = document.getElementById("phone").value;
  // var address = document.getElementById("address").value;
  // var gender = document.getElementById("gender").value;
  // var age = document.getElementById("age").value;
  // var country = document.getElementById("country").value;
  // var city = document.getElementById("city").value;
  // var state = document.getElementById("state").value;
  // var zip = document.getElementById("zip").value;
  // var data = {
    // "name": name,
    // "email": email,
    // "password": password,
    // "password2": password2,
  // }
  return(
    // $.ajax({
      // type: "POST",
      // url: "http://localhost:3000/register",
      // data: JSON.stringify(data),
      // contentType: "application/json; charset=utf-8",
      // dataType: "json",
      // success: function(data) {
        // console.log(data);
      // }
      <div className="ResetPassword w-dvw h-dvh ">
      <h1 className=' text-5xl text-center  font-bold cursor-default '>Register</h1>
      <form className=' w-[500px] shadow-lg shadow-black rounded-3xl p-[2rem] m-auto'>
        <fieldset className=' flex flex-col  mb-[20px] ' >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required 
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555]'
          />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required 
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555]'
          />
          
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required 
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555]'
          />
          
          <label htmlFor="password2">Confirm Password:</label>
          <input type="password" id="password2" name="password2" required 
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555]'
          />
          
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required 
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555]'
          />
          
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required 
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555]'
          />
          
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" required
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555]'
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </fieldset>
        <button type="submit" className= ' bg-[#fff] rounded-lg p-[5px] text-xl text-[#444] font-bold hover:bg-blue-600 hover:text-[#fff] transition-color  duration-500 active:bg-blue-400 ' >Register</button>
      </form>
      <a className=' ml-[5px] transition-transform  absolute hover:text-sky-600 hover:translate-y-1 duration-[605ms] active:text-sky-400 cusrsor-pointer  top-[25px] left-[25px]' 
          onClick={() => navigate('/')}
          onKeyDown={(e) => {
            if (e.key === 'Enter') navigate('/');
          }}
          tabIndex={0}
          role="button"
        >
          return to login 
        </a>
    </div>
  )
}

export default Register