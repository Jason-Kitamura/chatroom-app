import React from 'react';
import './Main.css';

import Join from '../Join/Join';
import ChatBox from '../ChatBox/ChatBox';

const Main = () => {

    return(
        <div id="main">
            <h1 id="header">Welcome</h1>
            <div id='chatContainer'>
                <div className="chatBox" id="chat1">
                    <ChatBox/>
                </div>
                <div className="chatBox" id="chat2">
                    <ChatBox/>
                </div>
            </div>
        </div>
    )
}

export default Main;