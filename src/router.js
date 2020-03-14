import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Rotas = () => {
    return(
      <Switch>
        {/* <Route path="/" exact component={Login} /> */}
        <Route path="/" exact component={Dashboard} />{/* dashboard */}
      </Switch>
    )
}

export default Rotas;