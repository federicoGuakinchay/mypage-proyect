import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();
  
  return (
    <div className="ResetPassword w-dvw h-dvh p-[10%]">
      <div className="text-5xl text-center mb-[50px] font-bold cursor-default">Reset Password</div>
      <div>
        <h2 className="text-2xl text-center font-bold cursor-default">Enter your name</h2>
        <h2 className="text-2xl text-center mb-[20px] font-bold cursor-default">
          and your email to receive a link with instructions to reset your password
        </h2>
        <form /*onSubmit={this.handleSubmit}*/ className="mb-[25px]">
          <div className="flex mb-[25px]">
            <label htmlFor="name" className="col-md-4 col-form-label text-md-right flex w-[100px] cursor-pointer">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555] w-[350px]"
              aria-label=" Name"
            />
          </div>
          <div className="flex ">
            <label htmlFor="email" className="col-md-4 col-form-label text-md-right flex w-[100px] cursor-pointer">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#333] rounded-lg p-[5px] text-xl font-bold hover:bg-[#555] focus:bg-[#555] w-[350px]"
              aria-label="Email"
            />
          </div>
          <button
            type="submit"
            className="bg-[#fff] rounded-lg p-[5px] text-xl text-[#444] font-bold hover:bg-blue-600 hover:text-[#fff] transition-color duration-500 active:bg-blue-400 mt-[25px]"
            aria-label="Submit reset password request"
          >
            Submit
          </button>
        </form>
        <h2 className="flex cursor-default">
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

export default ResetPassword;