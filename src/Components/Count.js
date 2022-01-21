import React from 'react';
import CountUp,{useCountUp} from 'react-countup';

export default function Count() {

  const {countUp,start,reset,update,pauseResume}=useCountUp({
    duration:5,
    end:10000,
    startOnMount:false,
  })
  console.log({countUp});
  return (
  <div>
    <div>
    <h1>{countUp}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pauseResume}>Resume/Pause</button>
      <button onClick={reset}>Reset</button>
      <button onClick={()=>update(2000)}>Update to 2000</button>
    </div>
      
      <h1>
      <CountUp end={200}/>
      <br/>
      <CountUp start={50} end={100} duration={10}/>
      <br/>
      <CountUp end={1000} duration={10} prefix='$' decimals={2}/>
      <br/>
      <CountUp end={1000} duration={10} suffix='USD' decimals={2}/>
    </h1>
  </div>
  )}
