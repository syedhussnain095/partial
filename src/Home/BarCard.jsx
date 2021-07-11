import React from 'react';

const BarCard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="co-sm-12 col-md-6 col-lg-6 col-xl-6 py-4">
                            <div className="card">
                                <div className="card-head">
                                    <div className="row for_card_head">
                                    <span className="plan">Trial Plan</span>
                                    <span className="icon"><i class="fas fa-info"></i></span>
                                    </div>
                                </div>
                                <div className="card-body for_card_body">
                                        <h3>6.80%</h3>
                                        <p>Access to mpartial engine</p>
                                        <p>Minimum $750 initial deposit</p>
                                        <h2>Free</h2>
                                </div>
                            </div>
                        </div>
                        <div className="co-sm-12 col-md-6 col-lg-6 col-xl-6 py-4">
                        <div className="card">
                                <div className="card-head">
                                    <div className="row for_card_head card_head_two">
                                    <span className="plan">Enterprise Plan</span>
                                    <span className="icon"><i class="fas fa-info"></i></span>
                                    </div>
                                </div>
                                <div className="card-body for_card_body">
                                        <h3>4.49%</h3>
                                        <p>Access to mpartial engine</p>
                                        <p>Discounted fee schedule</p>
                                        <p>Unlimited collaborators</p>
                                        <p>Dedicated account manager</p>
                                        <p>Prioritized turnaround time</p>
                                        <p>Minimum $750 initial deposit</p>
                                        <h1>$495/month</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BarCard;
