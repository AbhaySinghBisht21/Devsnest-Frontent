
import React,{useState} from 'react';
function Button() {
    const[Counter,setCounter]=useState(0);

    return (
       <span onClick={()=>(setCounter(Counter+1))} >{Counter}</span>
    )
}

export default Button
