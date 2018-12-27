import React from 'react';

const divStyle = {
   display: 'display: inline-block',
   padding: '16px', 
   textAlign: 'center',
   margin: '16px',
   border: '1px solid block'
};

const CharComponent = ({txt}) => {
   return( // You need to return if the component is only output JSX 
      <div style = {divStyle}>
      {/* {
      (txtAreaValue != null) ? 
      for(let char of this.state.content)
      console.log(char); : null
      } */}
      trying to return the each letter of the array through here 
      </div>
   )
}
export default CharComponent;