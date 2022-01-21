import React from 'react';
import {ChromePicker} from 'react-color'
import { useState } from 'react/cjs/react.development';

function Colorpicker() {
    const [color,setColor]=useState('#fff');
    const [showColorPicker,setShowColorPicker]=useState(false);
  return(
    <div>
        <button onClick={()=>setShowColorPicker(showColorPicker=>!showColorPicker)}>
            {showColorPicker ? 'Close color picker' : 'Pick a color'}</button>
        {
            showColorPicker && 
            <ChromePicker color={color} onChange={updatedColor=>setColor(updatedColor.hex)}/>
        
        }
        <h1>you picked {color}</h1>
    </div>
  ) 
}

export default Colorpicker;
