import React, {useState} from 'react';
import './Room.css'

const Room = ({ id, room, setRoom }) => {

    const [ dropDown, setDropDown ] = useState(false);
    const [ roomText, setRoomText ] = useState('Select a room below')

    function toggleClass( elementId, classToggle){
        document.getElementById(elementId).classList.toggle(classToggle);
    }

    function toggleDropDown(){

        if (dropDown === false){
        setDropDown(true)
        toggleClass(`dropList${id}`, 'activeList');
        toggleClass(`dropInput${id}`, 'activeInput');
        toggleClass(`dropBtn${id}`, 'activeBtn');
        toggleClass(`dropArrow${id}`, 'activeArrow');

        setTimeout(() => { 
            toggleClass(`dropItem1${id}`, 'activeItem1');
            toggleClass(`dropItem1${id}`, 'activeItem');
         }, 200);
         setTimeout(() => { 
            toggleClass(`dropItem2${id}`, 'activeItem2');
            toggleClass(`dropItem2${id}`, 'activeItem');
         }, 300);
         setTimeout(() => { 
            toggleClass(`dropItem3${id}`, 'activeItem3');
            toggleClass(`dropItem3${id}`, 'activeItem');
         }, 400);
        } else {
            setDropDown(false)
            toggleClass(`dropArrow${id}`, 'activeArrow');
            setTimeout(() => { 
                toggleClass(`dropItem3${id}`, 'activeItem3');
                toggleClass(`dropItem3${id}`, 'activeItem');
             }, 0);
             setTimeout(() => { 
                toggleClass(`dropItem2${id}`, 'activeItem2');
                toggleClass(`dropItem2${id}`, 'activeItem');
             }, 50);
             setTimeout(() => { 
                toggleClass(`dropItem1${id}`, 'activeItem1');
                toggleClass(`dropItem1${id}`, 'activeItem');
             }, 100);
             setTimeout(() => { 
                toggleClass(`dropList${id}`, 'activeList');
                toggleClass(`dropBtn${id}`, 'activeBtn');
             }, 150);
             setTimeout(() => { 
                toggleClass(`dropInput${id}`, 'activeInput');
             }, 500);
        }
    }
    function selectRoom( roomName ){
        setRoom(roomName);
        setRoomText(`${roomName}`);
        toggleDropDown();
    }

    return(
        <div className="dropDown">
            <div className="dropHead">
                <div id={`dropInput${id}`} className="dropInput">
                    <p>{roomText}</p>
                </div>
                <div id={`dropBtn${id}`} className="dropBtn" onClick={e => toggleDropDown()}>
                    <i id={`dropArrow${id}`} className=" dropArrow fas fa-arrow-down"></i>
                </div>
            </div>
            <ul id={`dropList${id}`}className="dropList">
                <li id={`dropItem1${id}`} className="dropItem" onClick={e => selectRoom('Room 1')}>Room 1</li>
                <li id={`dropItem2${id}`} className="dropItem" onClick={e => selectRoom('Room 2')}>Room 2</li>
                <li id={`dropItem3${id}`} className="dropItem" onClick={e => selectRoom('Room 3')}>Room 3</li>
            </ul>
        </div>
    )
}

export default Room;