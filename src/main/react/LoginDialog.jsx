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

export default class ExampleBasic extends React.Component {

    constructor() {
        super();

        this.state = { isOpen: false };
    }

    handleClick = () => {
        console.log('this is:', this);
    }

    open = () => this.setState({ isOpen: true });
    close() { this.setState({ isOpen: false }); }


    render() {
        const { isOpen } = this.state;
        const actions = [
            { text: 'Login', onClick: this.close, shouldFitContainer: true,  className:'width-wild' },

        ];

        return (
            <div >
                <div className={'white'}>
                <PageHeader
                    actions={<ButtonGroup style={{paddingRight: "50px"}}>
                        <Button onClick={this.open} appearance="primary" iconBefore={<SignInIcon/>}>Log In</Button>
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
                            <h2>Sidebar</h2>
                            <p>
                                <div>
                                    <FieldTextStateless label="Login"
                                                        shouldFitContainer={true}
                                        //onChange={this.setValue} value={this.state.value}
                                    />
                                    <FieldTextStateless label="Password"
                                                        type={"password"}
                                                        shouldFitContainer={true}
                                        //onChange={this.setValue} value={this.state.value}
                                    />

                                    <div style={{fontSize: "10px"}}>
                                        <AButton appearance="link" >Forgot password?</AButton>
                                    </div>
                                </div>
                            </p>
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


                {isOpen && (
                    <Modal actions={actions} onClose={this.close} width={"small"} heading="Modal Title">
                        <div>
                            <FieldTextStateless label="Login"
                                                shouldFitContainer={true}
                                //onChange={this.setValue} value={this.state.value}
                            />
                            <FieldTextStateless label="Password"
                                                type={"password"}
                                                shouldFitContainer={true}
                                //onChange={this.setValue} value={this.state.value}
                            />

                            <div style={{fontSize: "10px"}}>
                            <AButton appearance="link" >Forgot password?</AButton>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        );
    }
}