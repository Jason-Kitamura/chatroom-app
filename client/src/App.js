import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

import Main from './components/Main/Main';


const App =() => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [socket, setSocket] = useState({});

    return(
        <Router>
            {/* <Route path="/chat">
                <Chat name={name} setName={setName} room={room} setRoom={setRoom} socket={socket} setSocket={setSocket}/>
            </Route>
            <Route exact path="/">
                <Join name={name} setName={setName} room={room} setRoom={setRoom} socket={socket} setSocket={setSocket}/>
            </Route> */}
            <Main/>
            
        </Router>
    )
}

export default App;