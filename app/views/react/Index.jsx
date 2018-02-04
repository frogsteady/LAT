import {render} from 'react-dom';
import React from 'react';
import AButton from '@atlaskit/button';
import FieldTextStateless from '@atlaskit/field-text';
import LoginDialog from 'LoginDialogComponent';



// module.exports = {
//     render: render,
//     createElement: React.createElement
// };

render(

        <LoginDialog/>
    , document.getElementById('content')
);