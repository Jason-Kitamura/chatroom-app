import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './join.css';

import io from 'socket.io-client';

import closeIcon from '../../icons/closeIcon.png';

// let socket;


function Join( {name, setName, room, setRoom, socket, setSocket, chatState, setChatState} ){
    // const [name, setName] = useState('');
    // const [room, setRoom] = useState('');

    const ENDPOINT = 'localhost:5000';
    const history = useHistory();

    const login = (e) => {
        e.preventDefault();

        const newSocket = io(ENDPOINT);
        console.log('new socket', newSocket);

        setSocket(newSocket);
        console.log('socket hook', socket);

        newSocket.emit('join', { name, room }, (error) =>{
            if(error) {
                console.log('there is a server error');
                alert(error);
            } else {
                console.log('name', name, 'room', room);
                setChatState('room')
            }
        });
    }

    return(
        <div id="join">
            <div id="closeLogin" onClick={e => setChatState('new')}>
                <img src={closeIcon} alt="close"></img>
            </div>
            <div className ="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Join</h1>
                    <div><input placeholder="Name" className="joinInput" type="text" onChange={e =>setName(e.target.value)} /></div>
                    <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={e =>setRoom(e.target.value)} /></div>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                        <button className="button mt-20" type="submit" onClick={e => login(e)}>Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
   )
}

export default Join;