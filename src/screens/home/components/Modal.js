import React, { Component } from 'react';
import '../styles/style.css';

const Modal = ({ handleChange, videoUrl }) => {
    return (
        <div id="myModal" className="modal">

            <div className="modal-content">
                <iframe width="620" height="315" frameBorder="0" allowFullScreen
                    src={`https://www.youtube.com/embed/${videoUrl}`}>
                </iframe>

            </div>
            <div className="close">
                <button onClick={() => handleChange('shouldShowModal', false)}>Close</button>
            </div>


        </div>
    )
}

export default Modal