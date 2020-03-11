import React, { Component } from 'react';
import Header from './components/Header/Header';
import './assets/styles/App.scss';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { routes } from './routes';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  getRoutes = () => {
    return routes.map((route, key) => {
      console.log(route.exact)
      return <Route
        key={key}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <main className='app-main'>
            <Switch>
              {this.getRoutes()}
              <Redirect to='/developer/documentation' />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;

