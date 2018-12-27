import React from 'react';


const validationComponent = ({count}) => {
    return (  // You need to return if the component is only output JSX 
        <div>
            {
                (count < 5) ? <div>Text entry is too short submit</div> : <div>Your entry has met the requirements and ready for submission</div>
            }a
        </div>
        
    )
}


export default validationComponent;