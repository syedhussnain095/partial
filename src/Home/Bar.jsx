import React from "react";

const Bar = (props) => {
  return (
    <>
      <div className="for_all_matter_port">
        <div className="col-10 mx-auto py-3">
          <div className="for_bg_center">
            <div className="for_circle_cent">
              <h3>{props.fee}</h3>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Bar;
