import React, { useState } from 'react';
import './join.css';

import Room from '../Room/Room';

import io from 'socket.io-client';
import closeIcon from '../../icons/closeIcon.png';


function Join( {id, name, setName, room, setRoom,  setSocket, setChatState, removeCell} ){
    
    const ENDPOINT = 'localhost:5000';

    const login = (e) => {
        e.preventDefault();

        const newSocket = io(ENDPOINT);
        setSocket(newSocket);
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

    function closeCell(){
        setChatState('new');
        removeCell(id);
    }

    function handleCloseBtn(){
        if( id !== 'first'){
            return(
                <img src={closeIcon} alt="close"></img>
            )
        }
    }


    return(
        <div className="join">
            <div className="closeLogin" onClick={e => closeCell()}>
                { handleCloseBtn()}
            </div>
            <div className ="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Join</h1>
                    <div><input placeholder="Name" className="joinInput" type="text" onChange={e =>setName(e.target.value)} /></div>
                    {/* <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={e =>setRoom(e.target.value)} /></div> */}
                    <Room id={id} room={room} setRoom={setRoom}/>
                    <button className="button mt-20" type="submit" onClick={e => login(e)}>Sign In</button>
                 
                </div>
            </div>
        </div>
   )
}

export default Join;