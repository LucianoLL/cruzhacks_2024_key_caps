import {BrowserRouter as Router, Routes, Route, BrowserRouter, useParams, useNavigate} from 'react-router-dom';
import React, {useEffect, useState, componentDidMount, Component, useMemo} from 'react';
import App from '../App'
import Navbar from '../Components/Navbar';
import { Grid, Paper, Radio, TextField, Typography } from '@mui/material';
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
import {RadioGroup} from '@mui/material';
import nutrislug from '../Components/Images/nutrislug-icon.png';
import { GridOn } from '@mui/icons-material';


export default function DinnerPage(){

    <>
            <Grid container className="pt-[5rem] pl-[39rem]" spacing={5} columnSpacing={5}>
                    <Grid item xs={20}>
                    <div className='pl-2'>
                        <img className=" w-40 h-36 pl-6" src={nutrislug} alt='nutrislug-icon'/>
                        <Typography className='pl-12 italic'>
                            Dinner
                        </Typography>
                    </div>
                    </Grid>
            </Grid>
                
            <Grid container className="pl-[34rem]">
               <Grid item className='pr-8'>
                
                    <Paper>
                        <Typography>
                            High Protein
                        </Typography>
                        <Typography>
                            Haram Chicken
                        </Typography>
                        <Typography>
                            Tootie Fruties
                        </Typography>
                        <Typography>
                            Rice
                        </Typography>
                    </Paper>
                
               </Grid>
               <Grid item className='pr-8'>
                    <Paper>
                        <Typography>
                            Low Carbs
                        </Typography>
                    </Paper>
               </Grid>
                <Grid item>
                    <Paper>
                        <Typography>
                            Low Fat
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            


        
        </>
}