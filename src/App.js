import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { Navbar } from './components/layout/Navbar/Navbar';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Home } from './components/views/Home/Home';
import { Cart } from './components/views/Cart/Cart';
import { Test } from './components/views/Test/Test';
import { Footer } from './components/layout/Footer/Footer';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/test' component={Test} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
    <Footer />
  </Provider>
);

export { App };
