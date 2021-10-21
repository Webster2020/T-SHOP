import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { Navbar } from './components/layout/Navbar/Navbar';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Home } from './components/views/Home/Home';
import { Footer } from './components/layout/Footer/Footer';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
    <Footer />
  </Provider>
);

export { App };
