import React from 'react';
import 'MainCSS';
import '@atlaskit/button-group';
import LinksUtils from 'LinksUtils';
import Button from '@atlaskit/button';
import {AvatarGroup} from '@atlaskit/avatar';
import renderHTML from "react-render-html";
import LinksClient from "LinksClient";

export default class LinksPage extends React.Component {

    constructor() {
        super();
        this.state = {isLogInForm: true, isSignUpForm: false };
        LinksClient.getAllLinks().then(response => {

            this.setState({ links: JSON.parse(response.data[0].content) }); //
             //["http://instagram.com/goinglegendary", "http://vk.com/goinglegendary", "http://twitter.com/goinglegendary", "http://youtube.com/goinglegendary"];
        })
    }

    render() {
        const data = this.state.links ? this.state.links.map(link => ({
            email: link,
            key: link,
            name: link,
            src: LinksUtils.getFaviconFromUrl(link),
            href: '#',
            appearance: 'circle',
            size: 'medium',
            enableTooltip: true,
            name: 'vk.com',
            secondaryTest: 'will add all to friend list'
        })) : [];

        return (
            <div className={'links-page-class'} style={{marginTop: "2%"}}>
                <h2>Tony White</h2>
                <form action={"/logout"} method="post">
                    {renderHTML(document.csrfToken)}
                    <input type="submit" value="logout"/>
                </form>
                <Button type="link" href={'edit'} value="edit"/>
                <h4 className={'links-description-class'}>
                    I'm a developer :)
                </h4>
                <div style={{borderRadius: '15px', background: 'white'}}>
                    <AvatarGroup
                        appearance="grid"
                        onAvatarClick={v => window.open(v.item.email, '_blank')}
                        data={data}
                        maxCount={14}
                        size="xlarge"
                    />
                </div>
            </div>
        );
    }
}