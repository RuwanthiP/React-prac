import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  return (
    <div>
    <ReactPlayer url='https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12'
    controls 
    width='480px'
    height='240px'
    onReady={()=>console.log('OnReady callback')}
    onStart={()=>console.log('OnStart callback')}
    onError={()=>console.log('OnError callback')}
    onEnded={()=>console.log('OnEnded callback')}
    onPause={()=>console.log('OnPause callback')}
    />

    </div>
  )
}

export default VideoPlayer;
