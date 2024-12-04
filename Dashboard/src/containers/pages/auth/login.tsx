import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { SiGooglechrome } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { connect , ConnectedProps } from "react-redux"
import { login ,check_authenticated, load_user, refresh } from '../../../redux/actions/auth/auth';
import { RootState } from '@redux/reducers';

interface FormData {
  email: string;
  password: string;
}

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const connector = connect(mapStateToProps, {
  login,
  check_authenticated,
  refresh,
  load_user,
});

type LoginPageProps = ConnectedProps<typeof connector>;

const LoginPage: React.FC<LoginPageProps> = ({ 
  login,
  check_authenticated,
  refresh,
  load_user,
  isAuthenticated,

}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    });
    
    const { email, password } = formData;

    const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
      if (localStorage.getItem('access')) {
        refresh();
        check_authenticated();
        load_user();
      }
      if(isAuthenticated){navigate('/home');}
    }, [isAuthenticated ,refresh,check_authenticated,load_user,navigate]);
    

    const onSubmitData = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      login(email,password)
    };

  return (
    <div className="login  w-dvw h-dvh p-[10%]">
      <h1 className=' text-5xl text-center mb-[50px] font-bold cursor-default '> login page  </h1>
      <div className=' w-[500px] shadow-lg shadow-black rounded-3xl p-[2rem] m-auto text-center '> 
        <form onSubmit={onSubmitData}  action="" className=' flex flex-col gap-[15px] mb-[25px] '>
          <input 
            type="email" 
            name="email" 
            placeholder="Mail@hotmail.com" 
            value={email}
            autoComplete='email'
            required
            onChange={e => onChangeData(e)}
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555] px-[15px]'
          />
          <input 
            type="password" 
            name="password" 
            value={password}
            placeholder="password" 
            autoComplete='current-password'
            required
            onChange={e => onChangeData(e)}
            className=' bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555] px-[15px]'
          />
          <button type="submit"
            className= ' bg-[#fff] rounded-lg p-[5px] text-xl text-[#444] font-bold hover:bg-blue-600 hover:text-[#fff] transition-color  duration-500 active:bg-blue-400 focus:bg-blue-600 focus:text-[#fff]'
            >sing in</button>
        </form  >
        <div className=' flex mb-[15px] justify-center gap-[15px] '>
          <button
            className='rounded p-[10px] rounded-lg hover:bg-blue-600  transition-color  duration-500 active:text-blue-600 active:bg-[#fff] focus:bg-blue-600 '
            ><SiGooglechrome   className=' text-xl ' /></button>
          <button
            className='rounded p-[10px] rounded-lg hover:bg-blue-600  transition-color  duration-500 active:text-blue-600 active:bg-[#fff] focus:bg-blue-600'
            ><ImFacebook2      className=' text-xl ' /></button>
          <button
            className='rounded p-[10px] rounded-lg hover:bg-blue-600  transition-color  duration-500 active:text-blue-600 active:bg-[#fff] focus:bg-blue-600'
            ><FaSquareXTwitter className=' text-xl ' /></button>
        </div>
        <div className=' flex justify-around mb-[15px] cursor-default '>
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
          Go to {' '}
          <a href="http://localhost:5173/"
            className='mx-[5px] transition-transform hover:text-sky-600 hover:translate-y-1 duration-[605ms] active:text-sky-400 cusrsor-pointer'
          >only another one developer</a>
        </div>
      </div>
    </div>
  );
};

export default connector(LoginPage);