import React from 'react'
import '../App.css';
import DrinkType from './liquorComponents/drinkType'
import Container from './liquorComponents/Container'
import Amount from './liquorComponents/Amount'
import Results from './liquorComponents/Results'
import { Switch, Route } from 'react-router-dom'

function HardLiquor(props) {

    return (
        <div className="App-header">
            <Switch>
                <Route exact path='/liquor'><DrinkType setValues={props.setValues} values={props.values} /></Route>
                <Route path='/liquor/container'><Container setValues={props.setValues} values={props.values} /></Route>
                <Route path='/liquor/amount'><Amount setValues={props.setValues} values={props.values} /></Route>
                <Route path='/liquor/result'><Results values={props.values} /></Route>
            </Switch>

        </div>
    )
}

export default HardLiquor