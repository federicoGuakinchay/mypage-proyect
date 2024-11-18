import { Route ,Routes, useLocation} from 'react-router-dom'
import Error404 from '../../containers/errors/404';
import  Home  from '../../containers/pages/dashboard/home'
import Blog from '../../containers/pages/dashboard/blog';
import Project from '../../containers/pages/dashboard/project';
import Users from '../../containers/pages/dashboard/users';
import Calendar from '../../containers/pages/dashboard/clendar';
import Task from '../../containers/pages/dashboard/task';
import Settings from '../../containers/pages/dashboard/settings';
import MyPorfile from '../../containers/pages/dashboard/my_porfile';
import LoginPage from '../../containers/pages/auth/login';
import Register from '../../containers/pages/auth/register';
import Logout from '../../containers/pages/auth/logout';
import ResetPassword from '../../containers/pages/auth/reset_password';
import ResetPasswordComfirm from '../../containers/pages/auth/reset_password_comfirm'
import { AnimatePresence } from 'framer-motion';


function AppRoutes() {
  const location =  useLocation()
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {/*Error Display*/}
          <Route path="*" element={<Error404 />} />
          {/*Home/dashboard Page*/}
          <Route path="/home" element={<Home />} />
          {/* blog Page */}
          <Route path="/blog" element={<Blog />} />
          {/* projects Page */}
          <Route path="/projects" element={<Project />} />
          {/* users Page */}
          <Route path="/users" element={<Users />} />
          {/* Calendar Page */}
          <Route path="/calendar" element={<Calendar />} />
          {/* Task Page */}
          <Route path="/task" element={<Task/>} />
          {/* Settings Page */}
          <Route path="/settings" element={<Settings/>} />
          {/* my porfile Page */}
          <Route path="/my_porfile" element={<MyPorfile/>} />
          {/*login Page*/}
          <Route path="/" element={<LoginPage />} />
          {/*register Page*/}
          <Route path="/register" element={<Register />} />
          {/* logout Page */}
          <Route path="/logout" element={<Logout/>} />
          {/* send reset-mail Page*/}
          <Route path="/reset_password" element={<ResetPassword />} />
          {/*reset passdword Page*/}
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordComfirm />} />
        </Routes>  
      </AnimatePresence>
  )
}

export default AppRoutes

