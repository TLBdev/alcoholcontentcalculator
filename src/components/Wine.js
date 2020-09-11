import React from 'react';
import '../App.css';
import Amount from './wineComponents/Amount'
import Container from './wineComponents/Container'
import PouredBy from './wineComponents/PouredBy'
import Results from './wineComponents/Results'
import { Switch, Route } from 'react-router-dom';

function Wine(props) {
    console.log(props.values)
    return (
        <div className="App-header">
            <Switch>
                <Route path='/wine/amount'><Amount setValues={props.setValues} values={props.values} /> </Route>
                <Route exact path='/wine'><Container setValues={props.setValues} values={props.values} /></Route>
                <Route path='/wine/location'><PouredBy setValues={props.setValues} values={props.values} /> </Route>
                <Route path='/wine/result'><Results setValues={props.setValues} values={props.values} /></Route>
            </Switch>

        </div>

    )
}
export default Wine;