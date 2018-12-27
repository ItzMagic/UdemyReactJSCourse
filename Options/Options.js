import React from 'react';


const options = (props) => {
    return ( // You need to return if the component is only output JSX 
    <div>
        <p>Here are a few {props.word}packages we can offer you for {props.price}</p>
        <h3>{props.children}</h3>
    </div>
    )
};




export default options;
