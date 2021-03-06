import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { Cart } from './components/views/Cart/Cart';
import { Confirm } from './components/views/Confirm/Confirm';
import { Create } from './components/views/Create/Create';
import { Examples } from './components/views/Examples/Examples';
import { Footer } from './components/layout/Footer/Footer';
import { Home } from './components/views/Home/Home';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Navbar } from './components/layout/Navbar/Navbar';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/examples' component={Examples} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/confirm' component={Confirm} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
    <Footer />
  </Provider>
);

export { App };
