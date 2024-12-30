import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppRoutes from './hocs/routes/routes';
import ThemeProvider from "./components/settings/Theme";

function App (){
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <Router>
            <ThemeProvider>
              <AppRoutes />
            </ThemeProvider>
          </Router>
        </Provider>
      </Suspense>
  )
}

export default App 