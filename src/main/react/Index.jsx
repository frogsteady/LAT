import {render} from 'react-dom';
import React from 'react';
import AButton from '@atlaskit/button';


// module.exports = {
//     render: render,
//     createElement: React.createElement
// };

render(
    <AButton appearance="primary">first button</AButton>, document.getElementById('content')
);