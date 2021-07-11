import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const ContactUs = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "35ch",
      },
    },
  }));
  const classes = useStyles();
  return (
    <>
      <div className="for_all_matter_port">
        <div className="col-10 mx-auto">
          <div className="for_bg_center">
            <div className="for_circle_cent">
              <h3>{props.contactus}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-2">
        <div className="col-10 mx-auto py-2">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <form className={classes.root} noValidate autoComplete="off">
                <TextField label="Name" type="text" variant="outlined" />
                <TextField label="Email" type="email" variant="outlined" />
                <TextField label="Cell" type="number" variant="outlined" />
              </form>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 py-5">
              <div className="for_area">
                  <textarea type="text" rows="9" />
                    <div className="floating_label">
                        Write Your Message...
                        </div>                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
