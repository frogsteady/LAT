import React from "react";
import Button from '@atlaskit/button';
import FieldTextStateless from '@atlaskit/field-text';
import 'MainCSS';
import '@atlaskit/button-group';
import InviteTeamIcon from '@atlaskit/icon/glyph/invite-team';
import renderHTML from "react-render-html";

export default class SignUpForm extends React.Component
{

    constructor(props)
    {
        super(props);

        //email
        //username
        //login
        //password
        //handleInputChange
        //showLogInWithExistingAccount
    }


    render()
    {
        return (
        <form action={"/signup"} method={"POST"}>
            {renderHTML(document.csrfToken)}
            <h2>Sign up to create you own lam page. 1</h2>
            <div style={{border: '5px'}}>

                <FieldTextStateless value={this.props.email}
                                    placeholder="Email"
                                    name="email"
                                    onChange={this.props.handleInputChange}
                                    shouldFitContainer={true}/>
                <FieldTextStateless value={this.props.username}
                                    placeholder="Full name"
                                    name="username"
                                    onChange={this.handleInputChange}
                                    shouldFitContainer={true}/>
                <FieldTextStateless value={this.props.login}
                                    placeholder="Login"
                                    name="login"
                                    onChange={this.handleInputChange}
                                    shouldFitContainer={true}/>
                <FieldTextStateless value={this.props.password}
                                    placeholder="Password"
                                    name="password"
                                    type={"password"}
                                    onChange={this.handleInputChange}
                                    shouldFitContainer={true}/>

                <br/>
                <Button type={"submit"} shouldFitContainer={true} appearance="primary" iconBefore={<InviteTeamIcon/>}/>

                <div style={{fontSize: "12px", textAlign: "center"}}>
                    <Button onClick={this.props.showLogInWithExistingAccount} appearance="link">Log In with an existing account</Button>
                </div>
            </div>
        </form>)
    }

}