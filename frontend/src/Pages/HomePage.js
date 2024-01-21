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
import PorkIcon from '../Components/Icons/PorkIcon';
import Fish from '../Components/Icons/Fish';
import AlcoholIcon  from '../Components/Icons/AlcoholIcon';
import EggIcon from '../Components/Icons/EggIcon';
import GlutenIcon from '../Components/Icons/GlutenIcon';
import HalalIcon from '../Components/Icons/HalalIcon';
import MilkIcon from '../Components/Icons/MilkIcon';
import SoyIcon from '../Components/Icons/SoyIcon';
import TreeNutIcon from '../Components/Icons/TreeNutIcon';
import VeganIcon from '../Components/Icons/VeganIcon';
import VegetarianIcon from '../Components/Icons/VegetarianIcon';
import BeefIcon from '../Components/Icons/BeefIcon';
import {Fab} from '@mui/material';
import ShellfishIcon from '../Components/Icons/ShellfishIcon';

export default function HomePage() {
    
    

    const handleSubmit = (e) => {
        e.preventDefault();


    }

    return(
        <>


            <Navbar/>
            
                
                
            <form onSubmit={handleSubmit}>
                <Grid container className="pt-[5rem] pl-[39rem]" spacing={5} columnSpacing={10}>
                    <Grid item xs={20}>
                            <Typography>
                                Calories:
                            </Typography>
                            <TextField id="outlined-basic" className="bg-white rounded-lg"/>
                    </Grid>
                    <Grid item xs={10}>
                            <Typography className=" pt-3">
                                Dietary Restrictions:
                            </Typography>
                            <Fab color="primary" aria-label="add">
                                <PeanutIcon/>
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <SesameIcon/>
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <HalalIcon/>
                            </Fab>
                            <br/>
                            <Fab color="primary" aria-label="add">
                                <MilkIcon/>
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <PorkIcon/>
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <SoyIcon/>
                            </Fab>
                            <br/>
                            <Fab color="primary" aria-label="add">
                                <TreeNutIcon/>
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <AlcoholIcon/>
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <GlutenIcon/>
                            </Fab>
                            <br/>
                            <Fab color="primary" aria-label="add">
                                <ShellfishIcon/>
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <VeganIcon/>
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <VegetarianIcon/>
                            </Fab>
                            <br/>
                            <Fab color="primary" aria-label="add">
                                <Fish/>
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <BeefIcon/>
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <EggIcon/>
                            </Fab>
                    </Grid>
                    <Grid item>                
                            <Typography className=' pt-3'>
                                Select Dining Halls:
                            </Typography>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox sx={{color: "white"}}/>} label="Crown/Merill"/>
                                <FormControlLabel control={<Checkbox sx={{color: "white"}}/>} label="Nine/Ten" />
                                <FormControlLabel control={<Checkbox sx={{color: "white"}}/>} label="Porter/Kresge" />
                                <FormControlLabel control={<Checkbox sx={{color: "white"}}/>} label="Oaks/RCC" />
                                <FormControlLabel control={<Checkbox sx={{color: "white"}}/>} label="Cowell/Stevenson" />
                            </FormGroup>
                    </Grid>
                    <Grid item xs={10}>
                            <div className="pl-[3rem]">
                            <Typography>
                                <button className="bg-yellow-500 rounded w-20 text-white">
                                    Find
                                </button>
                            </Typography>
                        </div>
                    </Grid>
                    </Grid>
                
            </form>

        </>
    );
}