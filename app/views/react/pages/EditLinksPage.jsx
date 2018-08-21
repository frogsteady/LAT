import React from 'react';
import 'MainCSS';
import '@atlaskit/button-group';
import Button from '@atlaskit/button';
import StatelessLinkInput from 'StatelessLinkInput';
import LinksClient from "LinksClient";


export default class EditLinksPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            links: []
        };

        LinksClient.getAllLinks().then(response => {
            this.setState({links: JSON.parse(response.data[0].content)});
        })
    }

    addOnClick = (e, index) => {
        event.preventDefault();
        let item = "http://random.org";
        let linksCopy = this.state.links;
        linksCopy.splice(index, 0, item);
        this.setState({links: [...linksCopy]});
    };

    removeLinkOnClick = (event, index) => {
        event.preventDefault();
        this.setState(prevState => ({links: prevState.links.filter((link, i) => i !== index)}));

    };

    render() {

        return (

            <div style={{height: "100%"}}>
                <div style={{
                    width: "50%",
                    float: "left",
                    height: "100%",
                    overflow: "scroll"
                }}>
                    <div style={{margin: "40% 30%"}}>
                        <Button onClick={this.props.showLogInWithExistingAccount} appearance="primary"
                                shouldFitContainer={true}>Save</Button>
                        <br/>
                        <br/>
                        <Button onClick={this.props.showLogInWithExistingAccount} appearance="link"
                                shouldFitContainer={true} style={{background: "ghostwhite"}}>Cancel</Button>
                    </div>
                </div>
                <div style={{
                    width: "50%",
                    background: "ghostwhite",
                    float: "right",
                    height: "100%",
                    overflow: "scroll"
                }}>
                    <div style={{padding: "2%"}}>
                        <div style={{fontSize: "12px", textAlign: "center"}}>
                            <Button appearance="link" onClick={e => this.addOnClick(e, 0)}>Add new</Button>
                        </div>
                        {this.state.links.map((item, index) =>
                            (<div key={index + "-" + item}>
                                    {index}
                                    <StatelessLinkInput item={item}/>
                                    <div style={{fontSize: "12px", textAlign: "center"}}>
                                        <Button appearance="link"
                                                onClick={e => this.addOnClick(e, index + 1)}>Add new</Button>
                                        <Button appearance="link"
                                                onClick={e => this.removeLinkOnClick(e, index)}>Remove</Button>
                                    </div>
                                    <hr/>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        );
    }

}