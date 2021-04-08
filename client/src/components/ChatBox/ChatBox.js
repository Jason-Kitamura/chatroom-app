import React, { useState, useEffect } from 'react';


import './ChatBox.css';

import Join from '../Join/Join';
import Chat from '../Chat/Chat';

import lottie from 'lottie-web';
import animation from './assets/plusAnimation3.json';

const ChatBox = () => {

    const [ chatState, setChatState ] = useState('new');

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [socket, setSocket] = useState({});

    //lottie stuff
    let plusAnimation = React.createRef()
    const [anim, setAnim] = useState(null)

    // let anim = lottie.loadAnimation({
    //     container: plusAnimation.current,
    //     animationData: animation,
    //     loop: false,
    //     autoplay: false,
    // });



    useEffect(() =>{
        const obj = lottie.loadAnimation({
            container: plusAnimation.current,
            animationData: animation,
            loop: false,
            autoplay: false,
        })
        setAnim(obj);
        // return() => {
        //      lottie.destroy()
        // }
           
        

    }, [chatState]);

    function startAnimation(){
        anim.setDirection(1)
        anim.setSpeed(1.5)
        anim.play();
    }
    function leaveAnimation(){
        anim.setDirection(-1);
        anim.play();
    }


    if(chatState === 'new'){
        return(
            <div id='newUser'>
                
                
                <div className="plusAnimation" 
                    ref={plusAnimation} 
                    onMouseEnter={e => startAnimation()}
                    onMouseLeave={e => leaveAnimation() }
                    onClick={e => setChatState('login')}>
                </div>
                
                {/* <i class="fas fa-plus" onClick={e => setChatState('login')}></i> */}
            </div>
        )
    } else if ( chatState==='login' ){
        return(
            <Join 
                name={name} setName={setName} 
                room={room} setRoom={setRoom} 
                socket={socket} setSocket={setSocket} 
                chatState={chatState} setChatState={setChatState}
            />
        )
    } else if ( chatState === 'room' ){
        return(
            <Chat
                name={name} setName={setName} 
                room={room} setRoom={setRoom} 
                socket={socket} setSocket={setSocket} 
                chatState={chatState} setChatState={setChatState}
            />
        )
    }


}

export default ChatBox;