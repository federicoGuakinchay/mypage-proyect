import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './i18n';

import AppRoutes from './hocs/routes/routes';

function App (){
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <Router>
            <AppRoutes />
          </Router>
        </Provider>
      </Suspense>
  )
}

export default App 