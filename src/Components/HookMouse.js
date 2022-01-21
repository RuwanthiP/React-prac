import React,{ useEffect, useState } from 'react';

function HookMouse() {

    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

    const logMousePosition=e=>{
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log('UseEffect called')
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
            console.log('component unmount code');
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[]);
  return(
      <div>
         <h1> x-{x}</h1>
         <h1> y-{y}</h1>
      </div>
  )
}

export default HookMouse;
