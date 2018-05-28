import React from 'react';
import 'MainCSS';
import '@atlaskit/button-group';
import Page, {Grid, GridColumn} from '@atlaskit/page'
import CredentialsForm from 'CredentialsForm'

import SingleLineTextInput from '@atlaskit/input';
import InlineEdit from '@atlaskit/inline-edit';

export default class LinksPage extends React.Component {

    constructor()
    {
        super();
        this.state = { isLogInForm: true, isSignUpForm: false };
    }

    render()
    {
        return (
        <Page>
            <div>Hi, you are logged in!</div>
        </Page>);
    }
}