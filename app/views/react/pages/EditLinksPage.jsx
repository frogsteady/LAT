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

export default class EditLinksPage extends React.Component {

    constructor() {
        super();
        this.links = ["http://instagram.com/goinglegendary", "http://vk.com/goinglegendary", "http://twitter.com/goinglegendary", "http://youtube.com/goinglegendary"];
    }


    getRows = () => {
        return this.links.map(link => {
            return {
                cells: [
                    {
                        key: "iconCell",
                        content: <div className='color-main-grey'
                                      style={{paddingLeft: '20px'}}>{link}</div>
                    },
                    {
                        key: "statusCell",
                        content: <div className='color-main-grey'
                                      style={{paddingLeft: '20px'}}>{link}</div>
                    },
                    {
                        key: "actionCell",
                        content: <div className='color-main-grey'
                                      style={{paddingLeft: '20px'}}>{link}</div>
                    }
                ]
            }
        })
    }

    render() {

        return (
            <div className={'links-page-class'}>

                <DynamicTableStateless

                    emptyView={<h3>There are no outgoing synchronization messages being processed.</h3>}
                    head={{
                        cells: [
                            {
                                key: "iconCell",
                                content: <div className='color-main-grey'
                                              style={{paddingLeft: '20px'}}>Connection</div>,
                                width: 85
                            },
                            {
                                key: "statusCell",
                                content: <span className='color-main-grey' style={{'paddingLeft': '2px'}}>Status</span>,
                                width: 7
                            },
                            {
                                key: "actionCell",
                                content: <span className='color-main-grey' style={{'paddingLeft': '5px'}}>Action</span>,
                                width: 10
                            }
                        ]

                    }}

                    rowsPerPage={10}
                    rows={this.getRows()}
                    defaultSortKey="id"
                    defaultSortOrder="DESC"
                    isFixedSize
                    loaded={true}
                />

                hello world
            </div>
        );
    }
}