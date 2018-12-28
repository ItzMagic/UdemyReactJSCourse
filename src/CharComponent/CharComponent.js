import React from 'react';

const divStyle = {
   display: 'display: inline-block',
   padding: '16px', 
   textAlign: 'center',
   margin: '16px',
   border: '1px solid block'
};
// I am assuming that I can only use simple terenary code in the JSX which is why this isn't working here I will make this into a function in the app.js
const CharComponent = ({textAreaContent}) => { return ( <div style = {divStyle}> { this.textAreaContent((textAreaContent , index) => { console.log(textAreaContent[0]) )} }; </div> ) };



export default CharComponent;