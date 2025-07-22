import { useState } from 'react';
import ReactPlayer from 'react-player';
import "./../../style/project/popup-vodeo-player.css";


export const useVideoPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const openVideo = (url) => {
        setVideoUrl(url);
        setIsOpen(true);
    };

    const VideoPopup = () => (
        isOpen && (
            <div className="video-popup-overlay" onClick={() => setIsOpen(false)}>
                <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>
                    <ReactPlayer
                        url={videoUrl}
                        playing
                        controls
                        width="100%"
                        height="100%"
                    />
                    <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                </div>
            </div>
        )
    );

    return { VideoPopup, openVideo };
};