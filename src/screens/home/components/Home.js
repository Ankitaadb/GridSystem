import React, { Component } from 'react';
import '../styles/style.css';
import Modal from './Modal';

const HomeComponent = ({ videos, handleChange, shouldShowModal,
    selectedVideo, keyword, searchVideos }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2"><h4 className="text-center">Youtube Videos</h4></div>
                <div className="col-6 search"><input type="text" placeholder="Search.." value={keyword} onChange={(event) => handleChange('keyword', event.target.value)} />
                    <button type="submit" onClick={searchVideos}><i class="fa fa-search"></i></button></div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                {
                    videos.map((data, index) =>
                        <div key={index} className="col-4 pointer-cursor" onClick={() => { handleChange('selectedVideo', data); handleChange('shouldShowModal', true) }}>
                            <div className="video-container">
                                <div className="video">
                                    <img src={`https://img.youtube.com/vi/${data.embed_url}/mqdefault.jpg`} />
                                </div>
                                <div>
                                    <p>{data.name.split('Duration')[0]}</p>
                                    <p>{data.meta_info.split('ago')[1]}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            {shouldShowModal ? <Modal handleChange={handleChange} videoUrl={selectedVideo.embed_url} /> : null}
        </div>
    );
}

export default HomeComponent