import {BrowserRouter as Router, Routes, Route, BrowserRouter, useParams, useNavigate} from 'react-router-dom';
import React, {useEffect, useState, componentDidMount, Component, useMemo} from 'react';
import App from '../App'
import Navbar from '../Components/Navbar';
import { Grid, Paper, TextField, Typography } from '@mui/material';
import {Checkbox} from '@mui/material';
import {FormControlLabel} from '@mui/material';
import {FormGroup} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import withStyles from '@mui/material';
import IconButton from '@mui/material';
import Icon from '@mui/material';
import makeStyles from '@mui/material';
import PeanutIcon from '../Components/Icons/PeanutIcon';
import SesameIcon from '../Components/Icons/SesameIcon';
import {Fab} from '@mui/material';

export default function HomePage() {
    
    

    const handleSubmit = (e) => {
        e.preventDefault();


    }

    return(
        <>


            <Navbar/>
            
                
                
            <form onSubmit={handleSubmit}>
                <Grid container className="pt-[7rem] pl-[39rem]" spacing={5} columnSpacing={10}>
                    <Grid item>
                            <Typography>
                                Calories:
                            </Typography>
                            <TextField id="outlined-basic" className="bg-white rounded-lg"/>
                            <Typography className=" pt-9">
                                Dietary Restrictions:
                            </Typography>
                            <Fab color="primary" aria-label="add">
                                <PeanutIcon/>
                            </Fab>
                
                            
                            
                            <Typography className=' pt-9'>
                                Select Dining Halls:
                            </Typography>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox sx={{color: "white"}}/>} label="Crown/Merill"/>
                                <FormControlLabel control={<Checkbox sx={{color: "white"}}/>} label="Nine/Ten" />
                                <FormControlLabel control={<Checkbox sx={{color: "white"}}/>} label="Porter/Kresge" />
                                <FormControlLabel control={<Checkbox sx={{color: "white"}}/>} label="Oaks/RCC" />

                                <FormControlLabel control={<Checkbox sx={{color: "white"}}/>} label="Cowell/Stevenson" />
                            </FormGroup>
                            <div className="pl-[3rem] pt-9">
                            <Typography>
                                <button className="bg-yellow-500 rounded w-20 text-white">
                                    Post
                                </button>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </form>

        </>
    );
}