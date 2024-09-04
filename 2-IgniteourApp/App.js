// const heading=React.createElement("h1",{id:"heading"},"Hello world from react!");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading2=React.createElement("h2",{id:"heading2"},"hello heading2");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2);
// console.log(heading2);
import React from 'react';
import ReactDOM from 'react-dom';
const parent=React.createElement("div",{id:"parent"},
    [React.createElement('div',{id:"child"},
        React.createElement('h1',{id:"heading"},"hello namaste react!"),
        React.createElement('h2',{id:"heading2"},"Hello from nested react")
    ),React.createElement('div',{id:"child"},
        React.createElement('h1',{id:"heading"},"Hello from nested react!"),
        React.createElement('h2',{id:"heading2"},"Hello from nested react")
    )]
);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent)