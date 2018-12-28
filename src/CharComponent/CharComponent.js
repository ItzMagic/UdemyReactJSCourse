import React from 'react';

const divStyle = {
   display: 'display: inline-block',
   padding: '16px', 
   textAlign: 'center',
   margin: '16px',
   border: '1px solid block'
};

const CharComponent = ({textAreaContent}) => { return ( <div style = {divStyle}> { this.textAreaContent((textAreaContent , index) => { console.log(textAreaContent[0]) )} }; </div> ) }
export default CharComponent;