import React, { useState } from 'react';
import './Main.css';

import Tilt from 'react-tilt';

import ChatBox from '../ChatBox/ChatBox';

const Main = () => {

    const [ cellCount, setCellCount ]= useState(0);
    const [ cellArray, setCellArray ] = useState([]);

    const addCell = () => {
        setCellCount( cellCount + 1 );
        setCellArray([...cellArray, cellCount]);
    }
    const removeCell = (id) => {
        const newCellArray = cellArray.filter((cell) => {
            return cell !== id;
        } );
        setCellArray( newCellArray );
    }

    return(
        <div id="main">
            <h1 id="header">Welcome to the Chat Room!</h1>
            <div id='chatContainer'>
               <div className="chatCell">
                    <Tilt className="Tilt" options={{ max : 10, scale:1, easing:  "cubic-bezier(.03,.98,.52,.99)",}}>
                        <div className="Tilt-inner">
                            <div className="chatBox">
                                <ChatBox id={'first'}addCell={addCell} removeCell={removeCell}/>
                            </div>
                        </div>
                    </Tilt>
               </div>
                {cellArray.map( cell => (
                    <div key={cell} id={cell} className="chatCell">
                            <Tilt className="Tilt" options={{ max : 10, scale:1, easing:  "cubic-bezier(.03,.98,.52,.99)",}}>
                                <div className="Tilt-inner">
                                    <div className="chatBox">
                                        <ChatBox id={cell} addCell={addCell} removeCell={removeCell} />
                                    </div>
                                </div>
                            </Tilt>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main;