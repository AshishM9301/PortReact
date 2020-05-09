import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './content/Home';
import AboutPage from './content/AboutPage';
import ContactPage from './content/ContactPage';
import Vision from './content/Vision';

const Main = () => (
  <Switch>
    <Route exact path='/' exact component={Home} />

    <Route path='/about' component={AboutPage} />

    <Route path='/contact' component={ContactPage} />
    <Route path='/vision' component={Vision} />
  </Switch>
);

export default Main;
