import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';

function UseeffectOne() {
const [count,setCount]=useState(0);
const [name,setName]=useState('');

useEffect(()=>{
    console.log('Updating document title');
    document.title=`You clicked ${count} times`
},[count])
  return(
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  ) 
}

export default UseeffectOne;
