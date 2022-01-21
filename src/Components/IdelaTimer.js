import React,{useRef,useState} from 'react';
import IdleTimer from 'react-idle-timer';
import ReactModal from 'react-modal';
import Modal from 'react-modal/lib/components/Modal';

// Modal.setAppElement('#root')

export default function IdelaTimer() {
   
    const [isloggedIn,setisloggedIn]=useState(true)
    const[modalIsopen,setModalIsopen]=useState(false)
    const idelTimerRef=useRef(null)
    const sessionTimeoutRef=useRef(null)
    
    const onIdle=()=>{
        console.log("User is on Idle.");
        setModalIsopen(true)
        sessionTimeoutRef.current=setTimeout(logOut,5000)
    }

    const stayActive=()=>{
        modalIsopen(false);
        clearTimeout(sessionTimeoutRef.current);
        console.log('User is active');
    }

    const logOut=()=>{
        setModalIsopen(false);
        setisloggedIn(false);
        clearTimeout(sessionTimeoutRef.current);
        console.log('User has logout');
    }
  return(
    <div>
        {
            isloggedIn ? <h2>hello ruwanthi</h2>:<h2>Hello guest</h2>
        }

        <Modal isOpen={modalIsopen}>
            <h2>You have been idele for a while!</h2>
            <p>You will be logout soon.</p>
            <div>
                <button onClick={logOut}>Log me out</button>
                <button onClick={stayActive}>Keep me sign in</button>
            </div>
        </Modal>
        <IdleTimer ref={idelTimerRef} timeout={5*1000} onIdle={onIdle}>
        </IdleTimer>
    </div>
  ) 
}
