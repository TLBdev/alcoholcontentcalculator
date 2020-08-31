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

            <Switch>
                <Route exact path='/beer'><Beverage setValues={props.setValues} values={props.values} /></Route>
                <Route path='/beer/amount'><Number setValues={props.setValues} values={props.values} /></Route>
                <Route path='/beer/container'><Container setValues={props.setValues} values={props.values} /></Route>
                <Route path='/beer/result'><Results setValues={props.setValues} values={props.values} /></Route>
            </Switch>

        </div>
    );
}

export default Beer;