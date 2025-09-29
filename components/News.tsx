import React from 'react';

const CustomerStories: React.FC = () => {
    const videoSrc = "https://static.keenon.com/uploads/2025/09/22/eeca4ab16b104cfb811a40c52b89f3ab.mp4";
    const learnMoreLink = "https://www.keenon.com/en/stories/index.html";

    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-trust-navy">
            {/* Video Background */}
            <video
                key={videoSrc}
                className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white p-4 reveal">
                    <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-gray-100">
                        Customer Stories
                    </h2>
                    <div className="mt-8">
                        <a
                            href={learnMoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 border-2 border-white rounded-lg text-base font-bold transition-all duration-300 hover:bg-white hover:text-trust-navy transform hover:scale-105"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerStories;
