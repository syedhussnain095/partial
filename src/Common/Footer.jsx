import React from 'react';
import {NavLink} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <p>mpartial, a 4D Schematics Company. Copyright 2020 all rights reserved.</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <ul className="icons">
                                <div className="row">
                                <li>
                                    <NavLink to="/" >
                                    <FacebookIcon style={{ color: '#fff', opacity: '.5' }} />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" >
                                    <InstagramIcon style={{ color: '#fff', opacity: '.5' }} />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" >
                                    <LinkedInIcon style={{ color: '#fff', opacity: '.5' }} />
                                    </NavLink>
                                </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
