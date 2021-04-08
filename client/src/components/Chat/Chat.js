import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './chat.css'

import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages.js';
import InputBar from '../Input/Input.js';

// let socket;

function Chat( { name, setName, room, setRoom, socket, setSocket, chatState, setChatState } ){
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() =>{
        // const { name, room } = queryString.parse(location.search);
        // socket = io(ENDPOINT);
        console.log('chatSocket', socket);
        socket.emit('enter', { name, room }, (error) =>{
                if(error) {
                    alert(error);
                }
        } )
        // socket.emit('join', { name, room }, (error) =>{
        //     if(error) {
        //         alert(error);
        //     }
        // });

        return () => {
            socket.emit('leave');

            socket.off();
        }
    },[ENDPOINT]);

    // useEffect(() =>{

    // },[])

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