import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography,Toolbar,ElevationScroll } from "@material-ui/core";
import interview from "../../images/interview.png";


import { FaGoogle } from "react-icons/fa";




import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();

    return (

        <AppBar className={classes.appBar} position="sticky" >
            <div className={classes.brandContainer} >
                <img component={Link} to="/" className={classes.image} src={interview} alt="interview" height="30" />
                &nbsp; &nbsp; &nbsp;
                <Typography className={classes.heading} variant="h2" align="center">CHANCERY</Typography>
            </div>
        </AppBar>

    );
}

export default Navbar;