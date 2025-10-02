import React from 'react';

const VideoShowcase: React.FC = () => {
    // A general showcase video from KEENON's website.
    const videoUrl = "https://static.keenon.com/uploads/2025/04/27/6d056b978d474abfb247511585aadec1/video.m3u8";

    return (
        <section className="bg-trust-navy">
            <div className="w-full h-auto max-h-[80vh] overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label="KEENON Robotics Showcase Video"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default VideoShowcase;
