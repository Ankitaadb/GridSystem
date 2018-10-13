import React, { Component } from 'react';
import '../styles/style.css';

const Modal = ({ handleChange, videoUrl }) => {
    return (
        <div id="myModal" className="modal">

            <div className="modal-content">
                <iframe width="620" height="315" frameborder="0" allowfullscreen
                    src={`https://www.youtube.com/embed/${videoUrl}`}>
                </iframe>
                {/* <video src="https://www.youtube.com/watch?v=bo_efYhYU2A" width="320" height="240" controls>
                    
                    Your browser does not support the video tag.
                </video> */}

            </div>
            <div className="close">
                <button onClick={() => handleChange('shouldShowModal', false)}>Close</button>
            </div>


        </div>
    )
}

export default Modal