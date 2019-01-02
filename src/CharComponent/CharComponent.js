import React from 'react';

const char = (props)  => {
   const divStyle = {
      display: 'inline-block',
      padding: '16px', 
      textAlign: 'center',
      margin: '16px',
      border: '1px solid block',
      textAlign: 'center'
   };

   return(
      <div style = { divStyle }>
         {props.character}
      </div>
   )
};




export default char;