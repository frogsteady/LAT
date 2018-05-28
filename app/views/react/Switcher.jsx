import React, {Component} from 'react';
import CredentialsPage from 'CredentialsPage';
import LinksPage from 'LinksPage';
import {BrowserRouter} from "react-router-dom";
import Button, {ButtonGroup} from '@atlaskit/button';
import PageHeader from '@atlaskit/page-header';
import 'MainCSS';
import '@atlaskit/button-group';
import renderHTML from "react-render-html";

const ReactRouter = require('react-router-dom');
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
export default class Switcher extends Component
{

    constructor(props)
    {
        super(props);
    }

    isAuthenticad()
    {
        return this.props.username && this.props.username!=="undefined"
    }

    renderSwitchDependingOnAuth()
    {
        if(this.isAuthenticad())
        {
            return (
            <Switch>
                <Route exact path='/' render={(rProps) => <LinksPage {...rProps} />}/>
            </Switch>)
        }
        else
        {
            return (
            <Switch>
                <Route exact path='/' render={(rProps) => <CredentialsPage {...rProps} />}/>
            </Switch>)
        }
    }

    renderLogoutButton()
    {
        return (
        <form action={"/logout"} method="post">
            {renderHTML(document.csrfToken)}
            <input type="submit" value="logout" />
        </form>)
    }

    render()
    {
        const actions = (
            <ButtonGroup style={{paddingRight: "50px"}}>
                <Button appearance="link">About Us</Button>
                {this.renderLogoutButton()}
            </ButtonGroup>
        );

        return (
        <div>
            <div className={'white'}>
                <PageHeader
                    actions={actions}>
                    Title describing the content
                </PageHeader>
            </div>
            <BrowserRouter>
                {this.renderSwitchDependingOnAuth()}
            </BrowserRouter>
        </div>)
    }
}

