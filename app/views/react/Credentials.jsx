import React, {Component, PureComponent} from 'react';
import Button from '@atlaskit/button';
import AButton from '@atlaskit/button';
import FieldTextStateless from '@atlaskit/field-text';
import 'MainCSS';
import '@atlaskit/button-group';
import SignInIcon from '@atlaskit/icon/glyph/sign-in';
import EmailIcon from '@atlaskit/icon/glyph/email';
import UsersClient from 'UsersClient';

export default class Credentials extends React.Component {

    constructor() {
        super();

        this.state = {

            userToCreate: {login: '', password: '', name: '', email: ''},

            isLogInForm: true,
            isSignUpForm: false,
            isForgotForm: false
        };

    }

    goCreateNewAccount = () => this.setState({isLogInForm: false, isSignUpForm: true, isForgotForm: false});
    goLogInWithExistingAccount = () => this.setState({isLogInForm: true, isSignUpForm: false, isForgotForm: false});
    goForgotAccount= () => this.setState({isLogInForm: false, isSignUpForm: false, isForgotForm: true});

    doCreateUser = () => {
        console.log('doCreateUser is pressed');
        UsersClient(this.props.handleAuthError).createUser(this.state.userToCreate);
    }

    render() {
        const {isLogInForm, isSignUpForm, isForgotForm, userToCreate} = this.state;

        return (
            <div>

                {isLogInForm &&
                <div>
                    <h2>Log in to get access to your lam page.</h2>

                    <div style={{border: '5px'}}>

                            <FieldTextStateless placeholder="Login"
                                                shouldFitContainer={true}/>
                            <FieldTextStateless placeholder="Password"
                                                type={"password"}
                                                shouldFitContainer={true}/>

                        <div style={{fontSize: "10px"}}>
                            <AButton onClick={this.goForgotAccount} appearance="link">Forgot password?</AButton>
                        </div>
                        <br/>
                        <Button shouldFitContainer={true} appearance="primary" iconBefore={<SignInIcon/>}/>
                        <div style={{fontSize: "12px", textAlign: "center"}}>
                            <AButton onClick={this.goCreateNewAccount} appearance="link">Create a new
                                account</AButton>
                        </div>
                    </div>
                </div>

                }

                {isSignUpForm &&
                <div>
                    <h2>Sign up to create you own lam page.</h2>
                    <div style={{border: '5px'}}>

                            <FieldTextStateless value={userToCreate.email}
                                                placeholder="Email"
                                                shouldFitContainer={true}/>
                            <FieldTextStateless value={userToCreate.name}
                                                placeholder="Full name"
                                                shouldFitContainer={true}/>
                            <FieldTextStateless value={userToCreate.login}
                                                placeholder="Login"
                                                shouldFitContainer={true}/>
                            <FieldTextStateless value={userToCreate.password}
                                                placeholder="Password"
                                                type={"password"}
                                                shouldFitContainer={true}/>

                        <br/>
                        <Button onClick={this.doCreateUser} shouldFitContainer={true} appearance="primary" iconBefore={<SignInIcon/>}/>
                        <div style={{fontSize: "12px", textAlign: "center"}}>
                            <AButton onClick={this.goLogInWithExistingAccount} appearance="link">Log In with an
                                existing account</AButton>
                        </div>
                    </div>
                </div>
                }

                {isForgotForm &&
                <div>
                    <h2>Reset Password.</h2>
                    <div style={{border: '5px'}}>
                        <div>We can help you reset your password using your email address linked to your account.</div>

                            <FieldTextStateless placeholder="Email"
                                                shouldFitContainer={true}/>


                        <br/>
                        <Button shouldFitContainer={true} appearance="primary" iconBefore={<EmailIcon/>}/>
                        <div style={{fontSize: "12px", textAlign: "center"}}>
                            <AButton onClick={this.goLogInWithExistingAccount} appearance="link">Return to Log
                                In</AButton>
                        </div>

                    </div>
                </div>
                }

            </div>

        )
    }
}