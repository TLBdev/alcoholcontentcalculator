import React, { useState } from 'react';
import '../App.css';
import Container from './beerComponents/Container'
import Beverage from './beerComponents/Beverage'
import Number from './beerComponents/Number'
import Results from './beerComponents/Results'
import { alc_ml_util, alc_oz_util } from '../utils/alc_util'
import { Route, Switch, useLocation } from 'react-router-dom';


function Beer(props) {

    const location = useLocation()

    return (
        <div className="App-header">
            <p>{location.pathname}</p>
            <Switch>
                <Route exact path='/beer'><Beverage beverageChange={props.beverageChange} /></Route>
                <Route path='/beer/amount'><Number numberChange={props.numberChange} values={props.values} /></Route>
                <Route path='/beer/container'><Container containerChange={props.containerChange} /></Route>
                <Route path='/beer/result'><Results values={props.values} /></Route>
            </Switch>
            <p>{location.pathname}</p>
        </div>
    );
}

export default Beer;