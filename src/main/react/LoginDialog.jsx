import React, { Component, PureComponent } from 'react';
import Lorem from 'react-lorem-component';
import Button from '@atlaskit/button';
import Modal from '@atlaskit/modal-dialog';
import AButton, {ButtonGroup} from '@atlaskit/button';
import PageHeader from '@atlaskit/page-header';
import FieldTextStateless from '@atlaskit/field-text';
import 'MainCSS';
import '@atlaskit/button-group';
import PersonIcon from '@atlaskit/icon/glyph/person';
import SignInIcon from '@atlaskit/icon/glyph/sign-in';
import Page, { Grid, GridColumn } from '@atlaskit/page'
import CredentialsJSX from 'CredentialsJSX'

export default class ExampleBasic extends React.Component {

    constructor() {
        super();

        this.state = { isLogInForm: true, isSignUpForm: false };
    }

    render() {

        const actions = [
            { text: 'Login', shouldFitContainer: true,  className:'width-wild' },
        ];

        return (
            <div >
                <div className={'white'}>
                <PageHeader
                    actions={<ButtonGroup style={{paddingRight: "50px"}}>
                        <Button appearance="link" >About Us</Button>
                        {/*<Button>Sign up</Button>*/}

                    </ButtonGroup>}>
                    Title describing the content
                </PageHeader>
                    </div>

                <Page>
                    <Grid>
                        <GridColumn medium={6}>
                            <h1>Main heading</h1>
                            <p>
                                Lorem ipsum dolor sit amet and consectetur adipisicing elit.
                                Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
                                commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
                                possimus labore! Mollitia est quis minima asperiores.
                            </p>
                        </GridColumn>
                        <GridColumn medium={2}>
                        </GridColumn>

                        <GridColumn medium={4}>
                            <CredentialsJSX/>
                        </GridColumn>
                        <GridColumn>
                            <h2>Content below which takes up remaining space</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
                                commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
                                possimus labore! Mollitia est quis minima asperiores.
                            </p>
                        </GridColumn>
                    </Grid>
                </Page>


                {/*{ (*/}
                    {/*<Modal actions={actions} onClose={this.close} width={"small"} heading="Modal Title">*/}
                        {/*<div>*/}
                            {/*<FieldTextStateless label="Login"*/}
                                                {/*shouldFitContainer={true}*/}
                                {/*//onChange={this.setValue} value={this.state.value}*/}
                            {/*/>*/}
                            {/*<FieldTextStateless label="Password"*/}
                                                {/*type={"password"}*/}
                                                {/*shouldFitContainer={true}*/}
                                {/*//onChange={this.setValue} value={this.state.value}*/}
                            {/*/>*/}

                            {/*<div style={{fontSize: "10px"}}>*/}
                            {/*<AButton appearance="link" >Forgot password?</AButton>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</Modal>*/}
                {/*)}*/}
            </div>
        );
    }
}