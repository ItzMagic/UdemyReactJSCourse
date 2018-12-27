import React from 'react';

const divStyle = {
   display: 'display: inline-block',
   padding: '16px', 
   textAlign: 'center',
   margin: '16px',
   border: '1px solid block'
};

const CharComponent = ({content}) => {
   return( // You need to return if the component is only output JSX 
      <div style = {divStyle}>
      {
      (content ==! null) ? <div>  </div> : null
      }
      </div>
      )
}
export default CharComponent;