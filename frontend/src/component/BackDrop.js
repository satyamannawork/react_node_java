import React from 'react';
import './BackDrop.css'
const BackDrop = ({ showStatus, click }) => {



    return (

        showStatus && <div className="backdrop" onClick={click}> this is  back drop </div>
    )


}

export default BackDrop