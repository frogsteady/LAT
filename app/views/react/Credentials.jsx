import React, {Component, PureComponent} from 'react';
import Button from '@atlaskit/button';;
import FieldTextStateless from '@atlaskit/field-text';
import 'MainCSS';
import '@atlaskit/button-group';
import SignInIcon from '@atlaskit/icon/glyph/sign-in';
import EmailIcon from '@atlaskit/icon/glyph/email';
import UsersClient from 'UsersClient';
import InviteTeamIcon from '@atlaskit/icon/glyph/invite-team';

export default class Credentials extends React.Component {

    constructor() {
        super();

        this.state = {

            login: '', password: '', name: '', email: '',

            isLogInForm: true,
            isSignUpForm: false,
            isForgotForm: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);

    }

    goCreateNewAccount = () => this.setState({isLogInForm: false, isSignUpForm: true, isForgotForm: false});
    goLogInWithExistingAccount = () => this.setState({isLogInForm: true, isSignUpForm: false, isForgotForm: false});
    goForgotAccount= () => this.setState({isLogInForm: false, isSignUpForm: false, isForgotForm: true});


    doCreateUser = () => {
        console.log('doCreateUser is pressed');
        const {login, password, name, email} = this.state;
        UsersClient(this.props.handleAuthError).createUser({login, password, name, email});
    };

    handleInputChange(event) {
        let {name, value} = event.target;
        console.debug('handleInputChange is executed, name='+name+', value='+value);
        this.setState({[name]: value});
    }

    render() {

        const {login, password, name, email} = this.state;
        const {isLogInForm, isSignUpForm, isForgotForm} = this.state;

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
                            <Button onClick={this.goForgotAccount} appearance="link">Forgot password?</Button>
                        </div>
                        <br/>
                        <Button shouldFitContainer={true} appearance="primary" iconBefore={<SignInIcon/>}/>
                        <div style={{fontSize: "12px", textAlign: "center"}}>
                            <Button onClick={this.goCreateNewAccount} appearance="link">Create a new account</Button>
                        </div>
                    </div>
                </div>

                }

                {isSignUpForm &&
                <div>
                    <h2>Sign up to create you own lam page.</h2>
                    <div style={{border: '5px'}}>

                            <FieldTextStateless value={email}
                                                placeholder="Email"
                                                name="email"
                                                onChange={this.handleInputChange}
                                                shouldFitContainer={true}/>
                            <FieldTextStateless value={name}
                                                placeholder="Full name"
                                                name="name"
                                                onChange={this.handleInputChange}
                                                shouldFitContainer={true}/>
                            <FieldTextStateless value={login}
                                                placeholder="Login"
                                                name="login"
                                                onChange={this.handleInputChange}
                                                shouldFitContainer={true}/>
                            <FieldTextStateless value={password}
                                                placeholder="Password"
                                                name="password"
                                                type={"password"}
                                                onChange={this.handleInputChange}
                                                shouldFitContainer={true}/>

                        <br/>
                        <Button onClick={this.doCreateUser} shouldFitContainer={true} appearance="primary" iconBefore={<InviteTeamIcon/>}/>
                        <div style={{fontSize: "12px", textAlign: "center"}}>
                            <Button onClick={this.goLogInWithExistingAccount} appearance="link">Log In with an existing account</Button>
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
                            <Button onClick={this.goLogInWithExistingAccount} appearance="link">Return to Log In</Button>
                        </div>

                    </div>
                </div>
                }

            </div>

        )
    }
}