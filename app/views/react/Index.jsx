import {render} from 'react-dom';
import React from 'react';
import Switcher from 'Switcher';

   // TODO: react-beautiful-dnd -  github reports problems with lodash and mixin-deep which are parts of this compoonent
render(
    <Switcher username={document.userInfo.username} />, document.getElementById('content')
);