import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom'
/*import { ToastContainer } from 'react-toastify';*/
import  Home  from './containers/pages/home'
import Error404 from './containers/errors/404';
import navbar from './components/navegation/navbar';


function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*Error Display*/}
          <Route path="*" element={<Error404 />} />
          {/*Home Page*/}
          <Route path="/" element={<Home />} />
          {/*Home Page*/}
        </Routes>
      </Router>
    </>
  )
}

export default App
