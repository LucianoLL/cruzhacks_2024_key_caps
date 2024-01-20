import React from "react";
import App from "../App";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Navbar(){
    return(
        <>
        <div>
        <AppBar position="static">
            <Toolbar className="bg-yellow-500" variant="dense">
                <Typography className=" text-blue-700">
                    PlaceHolder Name
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    </>
    )

};

