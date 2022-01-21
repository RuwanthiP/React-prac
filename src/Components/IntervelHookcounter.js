import React,{ useState,useEffect }  from 'react';

function IntervelHookcounter() {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        const interval=setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    });

    const tick=()=>{
        setCount(previousCount=>previousCount+1);
    }

  return (
      <div>
          {/* <button onClick={tick}>Click Me</button> */}
        {count}
      </div>
  )
}

export default IntervelHookcounter;
