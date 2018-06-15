import React from 'react';
import 'MainCSS';
import '@atlaskit/button-group';
import Page, {Grid, GridColumn} from '@atlaskit/page'
import CredentialsForm from 'CredentialsForm'

import SingleLineTextInput from '@atlaskit/input';
import InlineEdit from '@atlaskit/inline-edit';
import Avatar from '@atlaskit/avatar';
import {AvatarGroup} from '@atlaskit/avatar';

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
        const data = this.links.map(link => ({
            email: link,
            key: link,
            name: link,
            src: this.getFaviconFromUrl(link),
            href: '#',
            appearance: 'circle',
            size: 'medium',
            enableTooltip: true,
            name:'vk.com',
            secondaryTest:'will add all to friend list'
        }));

        return (





                    <div className={'links-page-class'}>

                    <h2>Tony White</h2>
                    <h4 className={'links-description-class'}>
                        I'm a developer :)
                    </h4>

                        <div style={{borderRadius: '15px', background: 'white'}}>
                    <AvatarGroup
                        appearance="grid"
                        onAvatarClick={v=>window.open(v.item.email, '_blank')}
                        data={data}
                        maxCount={14}
                        size="xlarge"
                    />
                        </div>
                    </div>



        );
    }
}