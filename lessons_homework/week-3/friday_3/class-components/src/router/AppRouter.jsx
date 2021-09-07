import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Registro from "../components/Registro"
import AppGeek from "../container/AppGeek"

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/registro" component={Registro} / >
                    <Route exact path="/" component={AppGeek} / >
                </Switch>
            </Router>
        )
    }
}
