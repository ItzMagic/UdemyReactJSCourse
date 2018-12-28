import React from 'react';

const divStyle = {
   display: 'display: inline-block',
   padding: '16px', 
   textAlign: 'center',
   margin: '16px',
   border: '1px solid block'
};

const CharComponent = ({textAreaContent}) => {
   return( 
   // You need to return if the component is only output JSX 
   //    {
   //    (txtAreaValue != null) ? 
   //    this.content.forEach(element => console.log(element)
   //    <div style = {divStyle}>
   //    </div>
   //    }
   <div style = {divStyle}> {textAreaContent.forEach(function(value) 
      {
      console.log(value)
      }
   </div>
   
   )}
}
export default CharComponent;