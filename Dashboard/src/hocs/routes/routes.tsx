import { Route ,Routes, useLocation} from 'react-router-dom'
import Error404 from '../../containers/errors/404';
import  Home  from '../../containers/pages/home'
import Blog from '../../containers/pages/blog';
import Project from '../../containers/pages/project';
import Users from '../../containers/pages/users';
import Calendar from '../../containers/pages/clendar';
import Task from '../../containers/pages/task';
import Settings from '../../containers/pages/settings';
import MyPorfile from '../../containers/pages/my_porfile';
import Login from '../../containers/pages/login';
import Register from '../../containers/pages/register';
import Logout from '../../containers/pages/logout';
import ResetPassword from '../../containers/pages/reset_password';
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
          <Route path="/" element={<Login />} />
          {/*register Page*/}
          <Route path="/register" element={<Register />} />
          {/* logout Page */}
          <Route path="/logout" element={<Logout/>} />
          {/*reset passdword Page*/}
          <Route path="/reset_password" element={<ResetPassword />} />
        </Routes>  
      </AnimatePresence>
  )
}

export default AppRoutes

