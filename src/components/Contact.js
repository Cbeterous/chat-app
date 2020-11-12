import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

Contact.propTypes= {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
}

export function Contact(props){
    return (
        <div className="Contact">
            <img src={props.avatar} className="avatar" alt="avatar"/>
            <div>
    <div className="name">{props.name}</div>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline'}></div>
                    <div className="status-text">{props.online ? 'online' : 'offline'}</div>
                </div>
            </div>
        </div>
    )
}