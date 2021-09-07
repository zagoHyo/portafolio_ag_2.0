import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Estudiantes from "../components/Estudiantes";

export default class AppRouters extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/Estudiantes" component={Estudiantes} />
                    </Switch>
                    <Redirect to="/" />
                </Router>
            </div>
        )
    }
}

