import React, {Component, PureComponent} from 'react';
import Button, {ButtonGroup} from '@atlaskit/button';
import PageHeader from '@atlaskit/page-header';
import 'MainCSS';
import '@atlaskit/button-group';
import Page, {Grid, GridColumn} from '@atlaskit/page'
import CredentialsForm from 'CredentialsForm'

import SingleLineTextInput from '@atlaskit/input';
import InlineEdit from '@atlaskit/inline-edit';

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

                            hi there
                            <InlineEdit
                                label="With edit & read views"
                                readView="Read view"
                                editView={
                                    <SingleLineTextInput
                                        id="inline-edit-text-input"
                                        isEditing
                                        isInitiallySelected
                                        value={this.state.editValue}
                                        onChange={this.onChange}
                                    />
                                }
                                onConfirm={this.onConfirm}
                                onCancel={this.onCancel}
                            />
                        </GridColumn>
                        <GridColumn medium={2}>
                        </GridColumn>

                        <GridColumn medium={4}>
                            <CredentialsForm/>
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

            </div>
        );
    }
}