import React from 'react';
import { useState } from 'react/cjs/react.development';
import HookMouse from './HookMouse';

function MouseContainer() {
const [display,setDisplay]=useState(false)

  return (
      <div>
          <button onClick={()=>setDisplay(!display)}>Toogle display</button>
          {display && <HookMouse/>}
      </div>
  )
}

export default MouseContainer;
