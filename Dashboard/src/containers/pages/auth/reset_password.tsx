import { useNavigate } from 'react-router-dom';
import { reset_password } from '../../../redux/actions/auth/auth';
import { RootState } from '@redux/reducers';
import { useState } from 'react';
import { connect , ConnectedProps } from "react-redux"

interface FormData {email: string;}

const mapStateToProps = (state: RootState) => ({
  loading: state.auth.loading,
});

const connector = connect(mapStateToProps, {
  reset_password
});

type ResetPasswordProps = ConnectedProps<typeof connector>;

const ResetPassword: React.FC<ResetPasswordProps> = ({reset_password}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({email: ""});
    
  const { email } = formData;

  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitData = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(email)
    console.log(reset_password)
    reset_password(email)
  };
  return (
    <div className="ResetPassword w-dvw h-dvh p-[10%]">
      <div className="text-5xl text-center mb-[50px] font-bold cursor-default">Reset Password</div>
      <div>
        <h2 className="text-2xl text-center mb-[20px] font-bold cursor-default">
          enter your Email to receive a link with instructions to reset your password:
        </h2>
        <form onSubmit={onSubmitData} className="mb-[25px]">
          <div className="flex ">
            <label htmlFor="email" className="col-md-4 col-form-label text-md-right flex w-[100px] cursor-pointer">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Mail@hotmail.com" 
              value={email}
              required
              onChange={e => onChangeData(e)}
              className="bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555] w-[350px]"
              aria-label="Email"
            />
          </div>
          <button
            type="submit"
            className="bg-[#fff] rounded-lg p-[5px] text-xl text-[#444] font-bold hover:bg-blue-600 hover:text-[#fff] transition-color duration-500 active:bg-blue-400 mt-[25px] focus:bg-blue-600 focus:text-[#fff]"
            aria-label="Submit reset password request"
          >
            Submit
          </button>
        </form>
        <h2 className="flex cursor-default text-2xl">
          Return to the{' '}
          <a
            onClick={() => navigate('/')}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
            tabIndex={0}
            role="button"
            className="mx-[5px] transition-transform hover:text-sky-600 hover:translate-y-1 duration-[605ms] active:text-sky-400 cursor-pointer"
          >
            login page
          </a>
        </h2>
      </div>
    </div>
  );
}

export default connector(ResetPassword);