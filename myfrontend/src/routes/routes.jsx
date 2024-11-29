import {Route ,Routes, useLocation} from 'react-router-dom'
import Error404 from '../containers/errors/404';
import  Home  from '../containers/pages/home'
import Projects from '../containers/pages/project';
import Technologies from '../containers/pages/technologies';
import Blog from '../containers/pages/blog';
import About from '../containers/pages/about';
import Contact from '../containers/pages/contact';
import BlogPage from '../containers/pages/blog_page';
import AuthorPage from '../containers/pages/author_page';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location =  useLocation()
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {/*Error Display*/}
          <Route path="*" element={<Error404 />} />
          {/*Home Page*/}
          <Route path="/" element={<Home />} />
          {/*Projects Page*/}
          <Route path="/projects" element={<Projects />} />
          {/*Technologie Page*/}
          <Route path="/technologies" element={<Technologies />} />
          {/*Blog Page*/}
          <Route path="/Blog" element={<Blog />} />
          {/*About Page*/}
          <Route path="/About" element={<About />} />
          {/*Contact Page*/}
          <Route path="/Contact" element={<Contact />} />
          {/*blog detail*/}
          <Route path="/Blog/:slug" element={<BlogPage />} />
          {/*Author  page*/}
          <Route path="/Author/:slug" element={<AuthorPage />} />
        </Routes>  
      </AnimatePresence>
  )
}

export default App
