import React from 'react';
import 'MainCSS';
import '@atlaskit/button-group';
import {DynamicTableStateless} from '@atlaskit/dynamic-table'
import Page, {Grid, GridColumn} from '@atlaskit/page'
import CredentialsForm from 'CredentialsForm'

import SingleLineTextInput from '@atlaskit/input';
import InlineEdit from '@atlaskit/inline-edit';
import Avatar from '@atlaskit/avatar';
import {AvatarGroup} from '@atlaskit/avatar';
import renderHTML from "react-render-html";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import LinksUtils from "LinksUtils";

// fake data generator
// const getItems = count =>
//     Array.from({ length: count }, (v, k) => k).map(k => ({
//         id: `item-${k}`,
//         content: `item ${k}`,
//     }));
const getItems = links =>
    links.map(k => ({
        id: `item-${k}`,
        content: `${k}`,
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: '50%',
    float: 'right'

});

export default class EditLinksPage extends React.Component {

    // constructor() {
    //     super();
    //     this.links =
    // }




    constructor(props) {
        super(props);
        let links = ["http://instagram.com/goinglegendary", "http://vk.com/goinglegendary", "http://twitter.com/goinglegendary", "http://youtube.com/goinglegendary"];
        this.state = {

            items: getItems(links),
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({
            items,
        });
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {


        return (
            <div>
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        >
                                            <Avatar appearance='circle'
                                            size='medium' name="medium" status="locked" src={LinksUtils.getFaviconFromUrl(item.content)} />
                                            {/*{item.content}*/}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            </div>
        );
    }

}