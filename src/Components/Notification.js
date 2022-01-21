import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

const CustomToast=({closeToast})=>{
    return(
        <div>
            somthing went wrong
            <button onClick={closeToast}>Close</button>
        </div>
    )

}
export default function Notification() {

    const notify=()=>{
        toast.success(<CustomToast/>,{position:toast.POSITION.BOTTOM_LEFT,autoClose:1000,autoClose:false});
    }
  return(
    <div>
        <button onClick={notify}>Notify</button>
    </div>
  ) 
}
