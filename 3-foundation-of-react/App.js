// const heading=React.createElement("h1",{id:"heading"},"Hello world from react!");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading2=React.createElement("h2",{id:"heading2"},"hello heading2");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2);
// console.log(heading2);
import React from 'react';
import ReactDOM from 'react-dom';
//createElement-object-HTML element(rendering)
const heading=React.createElement("h1",{id:"heading"},"Namaste React");
const root=ReactDOM.createRoot(document.getElementById("root"));
//JSX-it is not html in js,HTML like syntax,XML like
//JSX transpiled before it reaches to the JS-parcel-babel
//JSX->babel transpiles it to createElement->ReactElement(object)->HTMLElement(render)

const jsxHeading=(<h1 id="heading" className="hello" tabIndex="50">Hello from JSX</h1>)
// root.render(heading);
// root.render(jsxHeading);

//component
//class based component
//functional componenet
//component is the js function which return jsx element.
const Head=()=>(
    <h1>Hello from Head</h1>
);
const elem=<span>Hello,</span>
const title=(
    <h1>Hello from title{elem}</h1>
    
);

//component composition
const HeadingComponent=()=>(
    <div className='div'>
        {title};
     <h1>Hello from functional component</h1>
     </div>
);

root.render(<HeadingComponent />);
