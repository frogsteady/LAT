import React, {Component} from 'react';
const ReactRouter = require('react-router-dom');
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
import CredentialsPage from 'CredentialsPage';
import { BrowserRouter } from "react-router-dom";

export default class Switcher extends Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
        <BrowserRouter >
            <Switch>
                <Route exact path='/' render={(rProps) => <CredentialsPage {...rProps} />}/>
            </Switch>
        </BrowserRouter>)
    }
}

