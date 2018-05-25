import React from 'react';
import 'MainCSS';
import '@atlaskit/button-group';
import Page, {Grid, GridColumn} from '@atlaskit/page'
import CredentialsForm from 'CredentialsForm'

import SingleLineTextInput from '@atlaskit/input';
import InlineEdit from '@atlaskit/inline-edit';

export default class CredentialsPage extends React.Component {

    constructor()
    {
        super();
        this.state = { isLogInForm: true, isSignUpForm: false };
    }

    render()
    {
        return (
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
                    <h2>Content below which takes up remaining space, Username is {document.userInfo.username}</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
                        commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
                        possimus labore! Mollitia est quis minima asperiores.
                    </p>
                </GridColumn>
            </Grid>
        </Page>);
    }
}