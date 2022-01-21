import React from 'react';
import {BounceLoader,BarLoader,BeatLoader,ClipLoader} from 'react-spinners'

function ReactSpiners() {
  return(
    <div>
        
        <BounceLoader loading size={48} color={'orange'}/>
        <BeatLoader loading size={72} color={'blue'}/>
        <BarLoader loading size={24} color={'red'}/>
        <ClipLoader loading size={48} color={'Green'}/>
    </div>
  ) 
}

export default ReactSpiners;
