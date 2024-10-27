import { Route ,Routes, useLocation} from 'react-router-dom'
import Error404 from '../../containers/errors/404';
import  Home  from '../../containers/pages/home'
import { AnimatePresence } from 'framer-motion';

function AppRoutes() {
  const location =  useLocation()
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {/*Error Display*/}
          <Route path="*" element={<Error404 />} />
          {/*Home Page*/}
          <Route path="/" element={<Home />} />
        </Routes>  
      </AnimatePresence>
  )
}

export default AppRoutes

//import Projects from './containers/pages/project';
//import Technologies from './containers/pages/technologies';
//import Blog from './containers/pages/blog';
//import About from './containers/pages/about';
//import Contact from './containers/pages/contact';