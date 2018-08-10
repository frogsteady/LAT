module.exports = {

    getFaviconFromUrl: function (url) {
        let website = url.replace('http://', '').replace('https://', '').split(/[/?#]/);
        switch (website[0]) {
            case "instagram.com":
                return "/assets/images/links/instagram.png";
            case "twitter.com":
                return "https://vignette.wikia.nocookie.net/24wikia/images/c/c8/Twitter_Bird.svg";
            case "vk.com":
                return "/assets/images/links/vk.svg";
            case "youtube.com":
                return "https://upload.wikimedia.org/wikipedia/commons/5/52/YouTube_social_white_circle_%282017%29.svg";
            default:
                return 'http://'.concat(website[1]).concat('/favicon.ico');
        }
    }

};

