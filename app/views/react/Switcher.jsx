import React, {Component} from 'react';
import CredentialsPage from 'CredentialsPage';
import {BrowserRouter} from "react-router-dom";
import Button, {ButtonGroup} from '@atlaskit/button';
import PageHeader from '@atlaskit/page-header';
import 'MainCSS';
import '@atlaskit/button-group';

const ReactRouter = require('react-router-dom');
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
export default class Switcher extends Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {

        const actions = [
            { text: 'Login', shouldFitContainer: true,  className:'width-wild' },
        ];

        return (
            <div>
                <div className={'white'}>
                    <PageHeader
                        actions={<ButtonGroup style={{paddingRight: "50px"}}>
                            <Button appearance="link">About Us</Button>
                            {/*<Button>Sign up</Button>*/}
                        </ButtonGroup>}>
                        Title describing the content
                    </PageHeader>
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={(rProps) => <CredentialsPage {...rProps} />}/>
                    </Switch>
                </BrowserRouter>
            </div>)
    }
}

