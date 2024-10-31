import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { SiGooglechrome } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the token and navigate away
    localStorage.removeItem('token');
  }, []);

  return (
    <div className="login  w-dvw h-dvh p-[10%]">
      <h1 className=' text-5xl text-center mb-[50px] font-bold cursor-default '> login page  </h1>
      <div className=' w-[500px] shadow-lg shadow-black rounded-3xl p-[2rem] m-auto text-center '> 
        <form action="" className=' flex flex-col gap-[15px] mb-[25px] '>
          <input 
            type="text" 
            name="username" 
            placeholder="username" 
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555]'
          />
          <input 
            type="password" 
            name="password" 
            placeholder="password" 
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555]'
          />
          <button type="submit"
            className= ' bg-[#fff] rounded-lg p-[5px] text-xl text-[#444] font-bold hover:bg-blue-600 hover:text-[#fff] transition-color  duration-500 active:bg-blue-400 '
            >Login</button>

        </form>
        <div className=' flex mb-[15px] justify-center gap-[15px] '>
          <button
            className='rounded p-[10px] rounded-lg hover:bg-blue-600  transition-color  duration-500 active:text-blue-600 active:bg-[#fff]'
            ><SiGooglechrome   className=' text-xl ' /></button>
          <button
            className='rounded p-[10px] rounded-lg hover:bg-blue-600  transition-color  duration-500 active:text-blue-600 active:bg-[#fff]'
            ><ImFacebook2      className=' text-xl ' /></button>
          <button
            className='rounded p-[10px] rounded-lg hover:bg-blue-600  transition-color  duration-500 active:text-blue-600 active:bg-[#fff]'
            ><FaSquareXTwitter className=' text-xl ' /></button>
        </div>
        <div className=' flex justify-around mb-[15px] cursor-default '>
          <a
            onClick={() => navigate('/register')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') navigate('/register');
            }}
            tabIndex={0}
            role="button"
            className='mx-[5px] transition-transform hover:text-sky-600 hover:translate-y-1 duration-[605ms] active:text-sky-400 cusrsor-pointer'
          >
            Register
          </a>|
          <a
            onClick={() => navigate('/reset_password')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') navigate('/reset_password');
            }}
            tabIndex={0}
            role="button"
            className='mx-[5px] transition-transform hover:text-sky-600 hover:translate-y-1 duration-[605ms] active:text-sky-400 cusrsor-pointer'
          >
              Do you forgot your password?
          </a>
        </div>
        <div className='flex justify-center cursor-default'>
          Go to the{' '}
          <a href="http://localhost:5173/"
            className='mx-[5px] transition-transform hover:text-sky-600 hover:translate-y-1 duration-[605ms] active:text-sky-400 cusrsor-pointer'
          >only another one developer</a>
        </div>
      </div>
    </div>
  );
};

export default Login;