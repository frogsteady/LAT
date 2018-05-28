import {render} from 'react-dom';
import React from 'react';
import Switcher from 'Switcher';

render(
    <Switcher username={document.userInfo.username} />, document.getElementById('content')
);