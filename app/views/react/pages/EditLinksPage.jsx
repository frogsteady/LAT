import React from 'react';
import 'MainCSS';
import '@atlaskit/button-group';
import {DynamicTableStateless} from '@atlaskit/dynamic-table'
import Page, {Grid, GridColumn} from '@atlaskit/page'
import CredentialsForm from 'CredentialsForm'

import SingleLineTextInput from '@atlaskit/input';
import Avatar from '@atlaskit/avatar';
import {AvatarGroup} from '@atlaskit/avatar';
import renderHTML from "react-render-html";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import LinksUtils from "LinksUtils";
import Button from '@atlaskit/button';
import StatelessLinkInput from 'StatelessLinkInput';


export default class EditLinksPage extends React.Component {

    constructor(props) {
        super(props);

        let links = ["http://instagram.com/goinglegendary", "http://vk.com/goinglegendary", "http://twitter.com/goinglegendary", "http://youtube.com/goinglegendary"];
        this.state = {
            items: links
        };
    }

    render() {
        return (
            <div style={{
                width: "50%",
                background: "ghostwhite",
                float: "right",
                height: "100%",
                padding: "2%",
                overflow: "scroll"
            }}>

                {this.state.items.map((item, index) =>
                    (<StatelessLinkInput item={item}/>))
                }

                <Button type="link" href={'/'} value="Cancel">Cancel</Button>
            </div>
        );
    }

}