import { useNavigate , useParams } from 'react-router-dom';
import { useState } from 'react';
import { connect , ConnectedProps } from "react-redux"
import {  reset_password_confirm } from '../../../redux/actions/auth/auth';
import { RootState } from '@redux/reducers';

interface FormData {
  password: string;
  comfirmPassword: string;
}

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const connector = connect(mapStateToProps, {
  reset_password_confirm
});

type LoginPageProps = ConnectedProps<typeof connector>;

const ResetPasswordComfirm: React.FC<LoginPageProps> = ({ 
  reset_password_confirm
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    password: "",
    comfirmPassword: "",
    });
  
  const params  = useParams()
  const uid    = params.uid?  params.uid : 'false'
  const token  = params.token?params.token : 'false'
  if (uid === 'false'|| token ==='false' )navigate('/')

  const { comfirmPassword, password } = formData
  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

    const onSubmitData = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      reset_password_confirm(uid , token , comfirmPassword , password)
      navigate('/')
    };

  return (
    <div className="login  w-dvw h-dvh p-[10%]">
      <h1 className=' text-5xl text-center mb-[50px] font-bold cursor-default '> Reset password </h1>
      <div className=' w-[500px] shadow-lg shadow-black rounded-3xl p-[2rem] m-auto text-center '> 
        <form onSubmit={onSubmitData}  action="" className=' flex flex-col mb-[25px] '>
          <label htmlFor="password" className="col-md-4 col-form-label text-md-right flex cursor-pointer"> new password:</label>
          <input 
            id ='password' 
            type="password" 
            name="password" 
            value={password}
            placeholder="password" 
            required
            onChange={e => onChangeData(e)}
            className=' mb-[25px] bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555] px-[15px]'
          />
          <label htmlFor="comfirmPassword" className="col-md-4 col-form-label text-md-right flex  cursor-pointer">comfirm password :</label>
          <input 
            id ='comfirmPassword'
            type="password" 
            name="comfirmPassword" 
            value={comfirmPassword}
            placeholder="password" 
            required
            onChange={e => onChangeData(e)}
            className='mb-[25px] bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555] px-[15px]'
          />
          <button type="submit"
            className= ' bg-[#fff] rounded-lg p-[5px] text-xl text-[#444] font-bold hover:bg-blue-600 hover:text-[#fff] transition-color  duration-500 active:bg-blue-400 focus:bg-blue-600 focus:text-[#fff]'
            >Change Password</button>
        </form  >
      </div>
    </div>
  );
};

export default connector(ResetPasswordComfirm);