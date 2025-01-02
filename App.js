import React from 'react';
import ReactDOM from 'react-dom/client';

//JSX
//React Element
const designation = <h2 className="heading">Senior Software Developer</h2>;
const experience = "6 years"
//React Component
//Class Based components - OLD
//Functional components - NEW
//Functional component
const Title = () => <h1 className="heading">React Application</h1>;
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">Dileep Kumar Reddy L</h1>
        { designation }
        <h2>{ experience }</h2>
        <h3>{ console.log("Test") }</h3>
        { Title() }
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);