import React from 'react';
import './VideoItem.css'

//similar destructuring of props as done in VideoList component

//** We want to call the callback function(in the main div) with the selected
//video so use an arrow function to call it otherwise we will get an error */

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;