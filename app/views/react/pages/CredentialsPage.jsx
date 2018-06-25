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
            <div style={{height: '100%'}}>
                <div style={{float: 'left', width: '50%'}}>
                    <ul style={{color: 'white', marginTop:'20%', marginLeft:'15%', fontSize: '22px', fontFamily: 'monospace'}}>
                        <li>Keep your socials in one place</li>
                        <li>Easy to share</li>
                        <li>Try the new experience</li>
                    </ul>
                </div>
            <div className={'credentials-page-class'} style={{display: 'table'}}>

                <h1 style={{textAlign: 'center', marginBottom: '0', color: 'darkslateblue'}}>LAM</h1>
                <p style={{textAlign: 'center', color: 'white', marginTop: '0', backgroundColor: 'darkslateblue', margin: '0px 25%', borderRadius: '2px'}}>
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

            </div></div>);
    }
}