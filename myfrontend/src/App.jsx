import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom'
/*import { ToastContainer } from 'react-toastify';*/
import Error404 from './containers/errors/404';
import  Home  from './containers/pages/home'
import Proyects from './containers/pages/project';
import Technologies from './containers/pages/technologies';
import Blog from './containers/pages/blog';
import About from './containers/pages/about';
import Contact from './containers/pages/contact';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*Error Display*/}
          <Route path="*" element={<Error404 />} />
          {/*Home Page*/}
          <Route path="/" element={<Home />} />
          {/*Projects Page*/}
          <Route path="/projects" element={<Proyects />} />
          {/*Technologie Page*/}
          <Route path="/technologies" element={<Technologies />} />
          {/*Blog Page*/}
          <Route path="/Blog" element={<Blog />} />
          {/*About Page*/}
          <Route path="/About" element={<About />} />
          {/*Contact Page*/}
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
