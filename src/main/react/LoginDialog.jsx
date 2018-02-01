import React, { Component, PureComponent } from 'react';
import Lorem from 'react-lorem-component';
import Button from '@atlaskit/button';
import Modal from '@atlaskit/modal-dialog';
import AButton from '@atlaskit/button';
import FieldTextStateless from '@atlaskit/field-text';

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
            { text: 'Login', onClick: this.close, shouldFitContainer: true },

        ];

        return (
            <div>
                <Button onClick={this.open}>Open Modal</Button>

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

                            <AButton appearance="link" >Forgot password?</AButton>

                        </div>
                    </Modal>
                )}
            </div>
        );
    }
}