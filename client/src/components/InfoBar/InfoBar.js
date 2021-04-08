import React from 'react';

import './InfoBar.css';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({ room, setChatState }) => {

    return(
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online Icon"></img>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <img src={closeIcon} alt="close image" onClick={e => setChatState('login')}></img>
            </div>
        </div>
    )
}

export default InfoBar;