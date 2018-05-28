import React from 'react';
import 'MainCSS';
import '@atlaskit/button-group';
import Page, {Grid, GridColumn} from '@atlaskit/page'
import CredentialsForm from 'CredentialsForm'

import SingleLineTextInput from '@atlaskit/input';
import InlineEdit from '@atlaskit/inline-edit';
import Avatar from '@atlaskit/avatar';

export default class LinksPage extends React.Component {

    constructor()
    {
        super();
        this.state = {isLogInForm: true, isSignUpForm: false};
        this.links = ["http://instagram.com/goinglegendary", "http://vk.com/goinglegendary", "http://twitter.com/goinglegendary", "http://youtube.com/goinglegendary"];
    }

    getFaviconFromUrl(url)
    {
        let website = url.replace('http://','').replace('https://','').split(/[/?#]/)[0];
        switch(website)
        {
            case "instagram.com": return "/assets/images/links/instagram.png";
            case "twitter.com": return "https://vignette.wikia.nocookie.net/24wikia/images/c/c8/Twitter_Bird.svg";
            case "vk.com": return "/assets/images/links/vk.svg";
            case "youtube.com": return "https://upload.wikimedia.org/wikipedia/commons/5/52/YouTube_social_white_circle_%282017%29.svg";
            default: return 'http://'.concat(urlParts[0]).concat('/favicon.ico');
        }
    }

    render()
    {
        return (
        <Page>
            {this.links.map((link) =>
                <div style={{display:"inline-flex"}}>
                    <Avatar src={this.getFaviconFromUrl(link)}  size="xlarge"/>
                    <InlineEdit readView="Read view"
                                editView={
                                    <SingleLineTextInput
                                        id="inline-edit-text-input"
                                        isEditing
                                        isInitiallySelected
                                    />
                                }
                    />
                </div>)
            }

            <div>Hi, you are logged in!</div>
        </Page>);
    }
}