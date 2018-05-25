import React from "react";
import Button from '@atlaskit/button';;
import FieldTextStateless from '@atlaskit/field-text';
import 'MainCSS';
import '@atlaskit/button-group';
import SignInIcon from '@atlaskit/icon/glyph/sign-in';
import renderHTML from 'react-render-html';

export default class LogInForm extends React.Component
{

    constructor(props)
    {
        super(props);

        //username
        //password
        //showForgotForm
        //showSignUpForm

    }

    render()
    {
        return (
        <div>
            <h2>Log in to get access to your lam page.</h2>

            <form action={"/login"} method={"POST"} style={{border: '5px'}}>

                <FieldTextStateless placeholder="Login"
                                    name={"username"}
                                    value={this.props.username}
                                    shouldFitContainer={true}/>
                <FieldTextStateless placeholder="Password"
                                    name={"password"}
                                    value={this.props.password}
                                    type={"password"}
                                    shouldFitContainer={true}/>


                {renderHTML(document.csrfToken)}

                <div style={{fontSize: "10px"}}>
                    <Button onClick={this.props.showForgotForm} appearance="link">Forgot password?</Button>
                </div>
                <br/>
                <Button type={"submit"} shouldFitContainer={true} appearance="primary" iconBefore={<SignInIcon/>}/>
                <div style={{fontSize: "12px", textAlign: "center"}}>
                    <Button onClick={this.props.showSignUpForm} appearance="link">Create a new account</Button>
                </div>
            </form>
        </div>)
    }
}