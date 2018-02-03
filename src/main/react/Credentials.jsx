import React, {Component, PureComponent} from 'react';
import Button from '@atlaskit/button';
import AButton from '@atlaskit/button';
import FieldTextStateless from '@atlaskit/field-text';
import 'MainCSS';
import '@atlaskit/button-group';
import SignInIcon from '@atlaskit/icon/glyph/sign-in';

export default class Credentials extends React.Component {

    constructor() {
        super();

        this.state = {isLogInForm: true, isSignUpForm: false};
    }

    createNewAccountOnClick = () => this.setState({isLogInForm: false, isSignUpForm: true});
    logInWithExistingAccountOnClick = () => this.setState({isLogInForm: true, isSignUpForm: false});

    render() {
        const {isLogInForm} = this.state;
        const {isSignUpForm} = this.state;
        return (
            <div>

                {isLogInForm &&
                <p>
                    <h2>Log in to get access to your lam page.</h2>

                    <div style={{border: '5px'}}>
                        <FieldTextStateless placeholder="Login"
                                            shouldFitContainer={true}/>
                        <FieldTextStateless placeholder="Password"
                                            type={"password"}
                                            shouldFitContainer={true}/>
                        <div style={{fontSize: "10px"}}>
                            <AButton appearance="link">Forgot password?</AButton>
                        </div>
                        <br/>
                        <Button shouldFitContainer={true} appearance="primary" iconBefore={<SignInIcon/>}/>
                        <div style={{fontSize: "12px", textAlign: "center"}}>
                            <AButton onClick={this.createNewAccountOnClick} appearance="link">Create a new
                                account</AButton>
                        </div>
                    </div>
                </p>
                }

                {isSignUpForm &&
                <p>
                    <h2>Sign up to create you own lam page.</h2>
                    <div style={{border: '5px'}}>
                        <FieldTextStateless placeholder="Email"
                                            shouldFitContainer={true}/>
                        <FieldTextStateless placeholder="Full name"
                                            shouldFitContainer={true}/>
                        <FieldTextStateless placeholder="Login"
                                            shouldFitContainer={true}/>
                        <FieldTextStateless placeholder="Password"
                                            type={"password"}
                                            shouldFitContainer={true}/>
                        <br/>
                        <Button shouldFitContainer={true} appearance="primary" iconBefore={<SignInIcon/>}/>
                        <div style={{fontSize: "12px", textAlign: "center"}}>
                            <AButton onClick={this.logInWithExistingAccountOnClick} appearance="link">Log In with an
                                existing account</AButton>
                        </div>
                    </div>
                </p>
                }

            </div>

        )
    }
}