import React from 'react';
import { Tippy } from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';


const Tooltip=()=> {
  return(
    <div>
        <Tippy content='Basic tooltip'>
        <button>Hover</button>
        </Tippy>

    </div>
  ) 
}

export default Tooltip;
