import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement('div',{id: 'parent'},
    React.createElement('div',{id: 'child'}, 
    [React.createElement('h1',{id: 'heading'},'Dileep kumar reddy frontend dev'),React.createElement('h1',{id: 'heading2'},'Senior software developer at valtech')])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);