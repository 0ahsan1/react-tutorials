import { useState } from 'react';

export const Counter = (props)=>{
    // let count = 0
    let [count,setCount] = useState(props.startAt)
    setInterval(()=>{
        count +=props.countBy;
        setCount(count)
    },1000)
    return (
        <>
            <span>{count}</span>        
        </>
    )
}
Counter.defaultProps = {
    startAt: 0,
    countBy:1
}