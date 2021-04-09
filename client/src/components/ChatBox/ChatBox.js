import React, { useState, useEffect } from 'react';
import './ChatBox.css';

import Join from '../Join/Join';
import Chat from '../Chat/Chat';

import lottie from 'lottie-web';
import animation from './assets/plusAnimation1.json';

const ChatBox = ({ id, addCell, removeCell, }) => {

    const [ chatState, setChatState ] = useState('new');
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [socket, setSocket] = useState({});

    //lottie stuff
    let plusAnimation = React.createRef()
    const [anim, setAnim] = useState(null)

    function loadAnimation(){
          const obj = lottie.loadAnimation({
            container: plusAnimation.current,
            animationData: animation,
            name: id,
            loop: false,
            autoplay: false,
        })
        setAnim(obj);
    }
    function startAnimation(){
        anim.setDirection(1)
        anim.setSpeed(1.5)
        anim.play();
    }
    function leaveAnimation(){
        anim.setDirection(-1);
        anim.play();
    }
    function addNewCell(){
        setChatState( 'login' );
        addCell();
        console.log('add new cell')
    }
    
    useEffect(() =>{
        loadAnimation();
        return() => {

        }
    }, [chatState]);



    if(chatState === 'new'){
        return(
            <div className='newUser'>
                <div className="plusAnimation" 
                    ref={plusAnimation} 
                    onMouseEnter={e => startAnimation()}
                    onMouseLeave={e => leaveAnimation()}
                    onClick={e => addNewCell()}>
                </div>
            </div>
        )
    } else if ( chatState==='login' ){
        return(
            <Join id={id}
                name={name} setName={setName} 
                room={room} setRoom={setRoom} 
                socket={socket} setSocket={setSocket} 
                chatState={chatState} setChatState={setChatState}
                removeCell={removeCell}
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