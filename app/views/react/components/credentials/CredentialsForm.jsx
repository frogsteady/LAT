import React from 'react';
import 'MainCSS';
import '@atlaskit/button-group';
import UsersClient from 'UsersClient';
import SignUpForm from 'SignUpForm';
import ForgotForm from 'ForgotForm';
import LogInForm from 'LogInForm';

export default class Credentials extends React.Component {

    constructor()
    {
        super();

        this.state = {
            login: '', password: '', name: '', email: '',
            isLogInForm: true,
            isSignUpForm: false,
            isForgotForm: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    showSignUpForm = () => this.setState({isLogInForm: false, isSignUpForm: true, isForgotForm: false});
    showLogInWithExistingAccount = () => this.setState({isLogInForm: true, isSignUpForm: false, isForgotForm: false});
    showForgotForm= () => this.setState({isLogInForm: false, isSignUpForm: false, isForgotForm: true});

    handleInputChange(event)
    {
        let {name, value} = event.target;
        this.setState({[name]: value});
    }

    render()
    {

        const {login, password, name, email} = this.state;
        const {isLogInForm, isSignUpForm, isForgotForm} = this.state;

        return (
            <div>

                {isLogInForm &&
                    <LogInForm username={name} password={password}
                               handleInputChange={this.handleInputChange}
                               showForgotForm={this.showForgotForm}
                               showSignUpForm={this.showSignUpForm}/>
                }

                {isSignUpForm &&
                    <SignUpForm email={email} username={name} login={login} password={password}
                                handleInputChange={this.handleInputChange}
                                showLogInWithExistingAccount={this.showLogInWithExistingAccount}/>
                }

                {isForgotForm &&
                    <ForgotForm email={email}
                                handleInputChange={this.handleInputChange}
                                showLogInWithExistingAccount={this.showLogInWithExistingAccount}/>
                }

            </div>)
    }
}