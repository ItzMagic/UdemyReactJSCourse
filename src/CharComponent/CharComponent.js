import React from 'react';

const divStyle = {
   display: 'display: inline-block',
   padding: '16px', 
   textAlign: 'center',
   margin: '16px',
   border: '1px solid block'
};
// I am assuming that I can only use simple ternary code in the JSX which is why this isn't working here I will make this into a function in the app.js
const CharComponent = (props) => { return ( <li style = {divStyle}> {props.characters}</li> ) };



export default CharComponent;