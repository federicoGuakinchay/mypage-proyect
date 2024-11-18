import { useNavigate } from 'react-router-dom';
import Layout from '../../../hocs/layouts/login_layout'


const Logout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
    <div className="logout w-dvw h-dvh p-[10%] bg-[#242424] bg[rgba(255, 255, 255, 0.87)] ">
      <h1 className=' text-5xl text-center mb-[50px] font-bold cursor-default'>You Are Logged Out </h1>
      <h2 className=' text-xl cursor-default'>
        Return to the{' '}
        <a className=' ml-[5px] transition-transform  absolute hover:text-sky-600 hover:translate-y-1 duration-[605ms] active:text-sky-400 cusrsor-pointer ' 
          onClick={() => navigate('/')}
          onKeyDown={(e) => {
            if (e.key === 'Enter') navigate('/');
          }}
          tabIndex={0}
          role="button"
        >
          login page
        </a>
      </h2>
      <h2 className=' text-xl cursor-default ' >
        Go to the {' '}
        <a className=' ml-[5px] transition-transform  absolute hover:text-sky-600 hover:translate-y-1 duration-[605ms] active:text-sky-400 cusrsor-pointer ' 
        href="http://localhost:5173/"
        >only another one developer</a>
      </h2>
    </div>
    </Layout>
  );
};

export default Logout;