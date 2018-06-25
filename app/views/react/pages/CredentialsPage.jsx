import React from 'react';
import 'MainCSS';
import '@atlaskit/button-group';
import Page, {Grid, GridColumn} from '@atlaskit/page'
import CredentialsForm from 'CredentialsForm'

import SingleLineTextInput from '@atlaskit/input';
import InlineEdit from '@atlaskit/inline-edit';

export default class CredentialsPage extends React.Component {

    constructor()
    {
        super();
        this.state = { isLogInForm: true, isSignUpForm: false };
        // {document.userInfo.username}
    }

    render()
    {
        return (
            <div className={'credentials-page-class'} style={{display: 'table'}}>

                <h1 style={{textAlign: 'center', marginBottom: '0'}}>Look at me</h1>
                <p style={{textAlign: 'center', color: 'white', marginTop: '0', backgroundColor: 'darkslateblue'}}>
                    Share your socials instantly.
                </p>

                <div style={{marginTop: '10%', marginLeft: '25%', marginRight: '25%'}}>
                    <CredentialsForm/>
                </div>

                <div style={{
                    display: 'table-row',
                    verticalAlign: 'bottom',
                    height: '1px', textAlign: 'center', color: 'darkslategrey', fontSize: '12px'
                }}>
                    <p>© 2018 Look At Me</p>
                </div>

            </div>);
    }
}