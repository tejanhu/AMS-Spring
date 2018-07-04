import React from 'react';
import {Switch,Route} from 'react-router-dom';


import Home from './home';
import Dashboard from './dashboard';
import CreateAccount from './createAccount';
import ViewAccount from './viewAccount';



const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/createAccount" component={CreateAccount}/>
        <Route path="/viewAccount" component={ViewAccount}/>
    </Switch>
)

export default Main;