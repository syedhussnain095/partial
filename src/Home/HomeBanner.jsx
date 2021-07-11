import React from 'react';
import bannervideo from "../video/bannervideo.mp4";
// import Header from "../Common/Header";
const HomeBanner = () => {
    return (
        <>

            <div className="banner_vid">
            <video
            width="100%"
            autoPlay
            loop
            muted
                >
                <source src={bannervideo} type="video/mp4" />
            </video>
            </div>
        </>
    );
};

export default HomeBanner;
