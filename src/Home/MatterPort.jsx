import React from 'react';
import { NavLink } from 'react-router-dom';
import imgone from "../images/matterone.png";
import imgtwo from "../images/mattertwo.png";

const MatterPort = (props) => {
    return (
        <>
        
            <div className="for_all_matter_port">
                <div className="container">
                    <div className="matter_heading">
                        <NavLink to="/" className="for_hover">
                            <h3>{props.matter}</h3>
                        </NavLink>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="for_matter_img">
                            <img src={imgone} alt={imgone} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="for_matter_img">
                        <img src={imgtwo} alt={imgtwo} />
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MatterPort;
