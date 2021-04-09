import React, { useState, useEffect } from 'react';

import './chat.css'

import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages.js';
import InputBar from '../Input/Input.js';


function Chat( { name, room, socket, setChatState } ){
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() =>{
        socket.emit('enter', { name, room }, (error) =>{
            if(error) {
                alert(error);
            }
        } )
        return () => {
            socket.emit('leave');
            socket.off();
        }
    },[ENDPOINT]);

    useEffect(() => {
        socket.on('message', ( message ) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

//function for sending messages
    const sendMessage = (e) => {
        e.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log( message, messages );

    return(
        <div className="outerContainer">
            <div className ="container">
                <InfoBar room={room} setChatState={setChatState}/>
                <Messages messages={messages} name={name}/>
                <InputBar message={message} setMessage={setMessage} sendMessage={sendMessage}/>

            </div>
        </div>
    )
}

export default Chat;