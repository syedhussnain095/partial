import React from 'react';
import videolastimg from "../images/videolastimg.svg";
const VideosData = (props) => {
    return (
        <>
            <div className="container-fluid for_all_matter_port">
                <div className="col-10 mx-auto">
                    <div className="for_video_head">
                        <h4>{props.videohead}</h4>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 py-2">
                            <div className="for_bg_video">
                                <div className="for_video_img">
                                    <div className="video_text">
                                        <h6>mpartial-Pre-Mitigation</h6>
                                <h4><i class="fas fa-play"></i></h4>
                                <div className="text-center for_last_video_img">
                                    <img src={videolastimg} alt={videolastimg} />
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 py-2">
                            <div className="for_bg_video">
                            <div className="for_video_img">
                            <div className="video_text">
                                <h6>mpartial-Pre-Mitigation</h6>
                                <h4><i class="fas fa-play"></i></h4>
                                <div className="text-center for_last_video_img">
                                    <img src={videolastimg} alt={videolastimg} />
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideosData;
