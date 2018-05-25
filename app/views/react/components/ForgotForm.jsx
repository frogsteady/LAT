import React from "react";
import 'MainCSS';
import '@atlaskit/button-group';
import Button from '@atlaskit/button';
import FieldTextStateless from '@atlaskit/field-text';
import EmailIcon from '@atlaskit/icon/glyph/email';
import renderHTML from 'react-render-html';

export default class ForgotForm extends React.Component
{

    constructor(props)
    {
        super(props);

        //email
        //handleInputChange
        //showLogInWithExistingAccount
    }


    render()
    {
        return (
        <form action={"/resetpassword"} method={"POST"}>
            {renderHTML(document.csrfToken)}
            <h2>Reset Password.</h2>
            <div style={{border: '5px'}}>
                <div>We can help you reset your password using your email address linked to your account.</div>

                <FieldTextStateless placeholder="Email"
                                    value={this.props.email}
                                    onChange={this.props.handleInputChange}
                                    shouldFitContainer={true}/>


                <br/>
                <Button type={"submit"} shouldFitContainer={true} appearance="primary" iconBefore={<EmailIcon/>}/>
                <div style={{fontSize: "12px", textAlign: "center"}}>
                    <Button onClick={this.props.showLogInWithExistingAccount} appearance="link">Return to Log In</Button>
                </div>

            </div>
        </form>)
    }

}