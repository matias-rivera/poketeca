import React, { useState } from 'react'
import './Alert.css'

const Alert = ({message}) => {

    const [show, setShow] = useState(true)


    return ( 
        <div className={`alert ${show ? '' : 'hide'}`}>
            <span className='fas fa-exclamation-circle'></span>
            <span className='msg'>{message}</span>
            <span className='close-btn' onClick={() => setShow(!show)}>
                <span class='fas fa-times'></span>
            </span>
        </div>
     );
}
 
export default Alert;
