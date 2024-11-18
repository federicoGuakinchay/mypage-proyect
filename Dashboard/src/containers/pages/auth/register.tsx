import { useNavigate } from 'react-router-dom';
import Layout from '../../../hocs/layouts/logout_layout'

function Register(){
  const navigate = useNavigate();

  return(
    <Layout>
      <div className="ResetPassword w-dvw h-dvh ">
      <h1 className=' text-5xl text-center  font-bold cursor-default '>Register</h1>
      <form className=' w-[500px] shadow-lg shadow-black rounded-3xl p-[2rem] m-auto'>
        <fieldset className=' flex flex-col  mb-[20px] ' >
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" required 
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555]'
          />
          <label htmlFor="first_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" required 
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
        </fieldset>
        <button type="submit" className= ' bg-[#fff] rounded-lg p-[5px] text-xl text-[#444] font-bold hover:bg-blue-600 hover:text-[#fff] transition-color  duration-500 active:bg-blue-400 focus:bg-blue-600 focus:text-[#fff] w-full' >Register</button>
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
  </Layout>
  )
}

export default Register