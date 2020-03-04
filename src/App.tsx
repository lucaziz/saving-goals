import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Savings from './pages/savings/Savings';
import SavingsDetail from './pages/savings/SavingsDetail';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/savings">
            <Savings />
          </Route>
          <Route path="/savings/detail">
            <SavingsDetail />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
