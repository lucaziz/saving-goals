import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Savings from './pages/savings/Savings';
import SavingsDetail from './pages/savings/SavingsDetail';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';

const Routing: React.FunctionComponent = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/savings" component={Savings} />
          <Route path="/savings/detail" component={SavingsDetail} />
        </Switch>
      </Router>
    </Layout>
  );
};

export default Routing;
