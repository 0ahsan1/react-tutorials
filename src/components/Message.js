import { useState } from 'react';


export const Message = (props)=>{
    const headStyle = {
        fontSize:'19px',
        color:'red'
    }
    const changeMessage = (event,count)=>{
        setMessage('Thank you',count)
        console.log('EVENT',event,count)
    }

    let [message, setMessage] = useState('Welcome Visitor')
    return (
        <div>
            <h1 style={headStyle}>{message}</h1>
            <button onClick={(event)=>changeMessage(event)}>Subscribe</button>
            <button onClick={(event)=>changeMessage(event,4)}>Subscribe</button>
            <button onClick={()=>{props.greetHandler('A')}}>Greet Parent</button>
        </div>
    );
}