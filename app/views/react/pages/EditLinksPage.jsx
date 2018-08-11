import React from 'react';
import 'MainCSS';
import '@atlaskit/button-group';
import Button from '@atlaskit/button';
import StatelessLinkInput from 'StatelessLinkInput';
import LinksClient from "LinksClient";
import {Skeleton} from "@atlaskit/avatar"
import {colors} from "@atlaskit/theme"
import {AvatarGroup} from '@atlaskit/avatar';
import LinksUtils from "LinksUtils";
import CheckCircleIcon from '@atlaskit/icon/glyph/check-circle';
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle';


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

    render() {

        const data = [{
            email: 'save',
            key: 'save',
            name: 'save',
            src: "/assets/images/ui/save.png",
            href: '#',
            appearance: 'square',
            size: 'medium',
            enableTooltip: true,
            secondaryTest: 'will add all to friend list',
            borderColor: '#8B0000'
        }, {
            email: 'cancel',
            key: 'cancel',
            name: 'save',
            src: "/assets/images/ui/cancel.png",
            href: '#',
            appearance: 'square',
            size: 'medium',
            enableTooltip: true,
            secondaryTest: 'will add all to friend list',
            borderColor: '#8B0000'

        }];


        return (

            <div style={{height: "100%"}}>
                <div style={{
                    width: "50%",
                    float: "left",
                    height: "100%",
                    overflow: "scroll"
                }}>
                    <div style={{display:"flex", justifyContent:"center", alignItems: "center", width: "100%", height: "100%"}}>
                        {/*<Button type="link" href={'/'} value="Cancel">Save</Button>*/}
                        {/*<Button type="link" href={'/'} value="Cancel">Cancel</Button>*/}
                        {/*<Skeleton*/}
                            {/*name="xsmall"*/}
                            {/*size="xsmall"*/}
                            {/*color={colors.T500}*/}
                            {/*weight="strong"*/}
                        {/*/>*/}
                        <AvatarGroup
                            appearance="grid"
                            onAvatarClick={v => window.open(v.item.email, '_blank')}
                            data={data}
                            maxCount={14}
                            size="xlarge"
                        />
                        {/*<CheckCircleIcon size={"xlarge"} primaryColor={"forestgreen"} />*/}
                        {/*<CrossCircleIcon size={"xlarge"} primaryColor={"darkred"} />*/}
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
                        {this.state.links.map((item, index) =>
                            (<StatelessLinkInput item={item}/>))
                        }
                    </div>

                </div>
            </div>
        );
    }

}