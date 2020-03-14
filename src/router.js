import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import Vercrescimento from './pages/Vercrescimento';

const Rotas = () => {
    return(
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard"  component={Dashboard} /> 
        <Route path="/perfil"  component={Perfil} /> 
        <Route path="/vercrescimento"  component={Vercrescimento} />
        {/* <Route path="/premios" exact component={Premios} />  */}

      </Switch>
    )
}

export default Rotas;