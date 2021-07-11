import React from 'react';

const BarData = (props) => {
    return (
        <>
            <div className="container-fluid for_all_matter_port">
                <div className="col-10 mx-auto">
                    <div className="text-center for_center_bar_text">
                        <p>{props.data}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BarData;
