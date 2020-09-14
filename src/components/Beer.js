import React from 'react';
import '../App.css';
import Container from './beerComponents/Container'
import Beverage from './beerComponents/Beverage'
import Number from './beerComponents/Number'
import Results from './beerComponents/Results'
import { Route, Switch } from 'react-router-dom';


function Beer(props) {

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