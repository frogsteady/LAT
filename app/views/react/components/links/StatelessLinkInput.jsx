import React, {Component} from 'react';
import InlineEdit, {InlineEditStateless} from '@atlaskit/inline-edit';
import SingleLineTextInput from '@atlaskit/input';

export default class StatelessLinkInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            // onEventResult: 'Click on a field above to show edit view',
            value: props.item
        };
    }

    onEditRequested = () => {
        this.setState({
            isEditing: true,
            // onEventResult: `onEditRequested called`,
        });
    };

    onConfirm = () => {
        this.setState({
            isEditing: false,
            // onEventResult: `onConfirm called`,
        });
    };

    onCancel = () => {
        this.setState({
            isEditing: false,
            // onEventResult: `onCancel called`,
        });
    };

    onChange = (event) => {
        this.setState({
            value: event.target.value,
            // onEventResult: `onChange called with value: ${event.target.value}`,
        });
    };

    render() {
        return (
            <div>

                <InlineEditStateless
                    label="Stateless Inline Edit"
                    isEditing={this.state.isEditing}
                    onEditRequested={this.onEditRequested}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                    readView={
                        <SingleLineTextInput
                            isEditing={false}
                            value={this.state.value}
                        />
                    }
                    editView={
                        <SingleLineTextInput
                            isEditing
                            isInitiallySelected
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                    }
                />
            </div>
        );
    }
}