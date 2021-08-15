import React from 'react';
import VideoItem from './VideoItem';

//destructured out the video,onVideoSelect properties from 
//props or we can use props.videos or props.onVideoSelect
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList;