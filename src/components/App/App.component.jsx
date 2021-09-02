import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import MainPage from '../../pages/Main';
import Layout from '../Layout';
import { AppContext } from '../../providers/App/AppProvider';

function App() {
  const { app } = useContext(AppContext);
  const { darkMode } = app;

  return (
    <div className="backgroundColor" data-theme={darkMode ? 'dark' : 'light'}>
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/login">
            <Layout>
              <LoginPage />
            </Layout>
          </Route>
          <Route path="*">
            <Layout>
              <NotFound />
            </Layout>
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
