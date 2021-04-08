import React from 'react';
import './Main.css';

import Tilt from 'react-tilt';

import Join from '../Join/Join';
import ChatBox from '../ChatBox/ChatBox';

const Main = () => {

    return(

        <div id="main">
            
            <h1 id="header">Welcome</h1>
            <div id='chatContainer'>
               <div className="chatCell">
                    <Tilt className="Tilt" options={{ max : 10, scale:1, easing:  "cubic-bezier(.03,.98,.52,.99)",}}>
                        <div className="Tilt-inner">
                            <div className="chatBox">
                                <ChatBox />
                            </div>
                        </div>
                    </Tilt>
               </div>
               <div className="chatCell">
                    <Tilt className="Tilt" options={{ max : 10, scale:1, easing:  "cubic-bezier(.03,.98,.52,.99)" }}>
                        <div className="Tilt-inner">
                            <div className="chatBox">
                                <ChatBox />
                            </div>
                        </div>
                    </Tilt>
               </div>
                    {/* <div className="chatBox " id="chat1">  
                            <ChatBox/>
                    </div>
             
                <div className="chatBox" id="chat2">
                    <ChatBox/>
                </div> */}
            </div>

        </div>

    )
}

export default Main;