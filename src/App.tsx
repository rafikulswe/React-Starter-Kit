import { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';
import LazyLoader from './components/Loading';
// import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ErrorBoundary from './components/Error/ErrorBoundary';
import ContextProvider from './context';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Suspense fallback={<LazyLoader />}>
          <ErrorBoundary>
            <ScrollToTop>
              <AppRoutes />
            </ScrollToTop>
          </ErrorBoundary>
        </Suspense>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;