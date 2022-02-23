import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import interview_background from "./images/interviewbackground1.jpg";
import useStyles from "./styles.js";



const App = () => {

    const classes = useStyles();

    return (
        <BrowserRouter >

                <Navbar />
                <div className={classes.headerTitles}>
                    <h1 className={classes.heading}>A New Way To Learn</h1>
                    <p className={classes.para}>Chancery is the best platform to know interview experiences of others before facing yours,
                        to enhance your skills and get into your dream job.</p>
                </div>
                <img className={classes.image} component={Link} to="/" src={interview_background} alt="backgroundimage" width="100%" />
                <Home />
               

        </BrowserRouter>
    )
}

export default App;