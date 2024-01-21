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


export default function HomePage() {
    
    const [calories, setCalories] = useState('');
    const [diet, setDiet] = useState('');
    const [dhB, setDHB] = useState('');
    const [dhL, setDHL] = useState('');
    const [dhD, setDHD] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const meal = {calories, diet, dhB, dhL, dhD};

    }

    return(
        <>
           <form onSubmit={handleSubmit}>
                <Grid container className="pt-[5rem] pl-[39rem]" spacing={5} columnSpacing={5}>
                    <Grid item xs={20}>
                    <div className='pl-2'>
                        <img className=" w-40 h-36 pl-6" src={nutrislug} alt='nutrislug-icon'/>
                        <Typography className='pl-12 italic'>
                            Welcome!
                        </Typography>
                    </div>
                    </Grid>
                    
                    <Grid item xs={10}>
                            <Typography className='pt-[-20rem] pl-6'>
                                How Many Calories?
                            </Typography>
                            <TextField  id="outlined-basic" className="bg-white rounded-lg pl-6" value={calories}
                            onChange={(e) => setCalories(e.target.value)}/>
                    </Grid>
                    <Grid item xs={20}>
                            <Typography className="pl-2">
                                Your Dietary Restrictions?
                            </Typography>
                            
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value={"Peanut"}>
                                <PeanutIcon/>
                            </Fab>
                            
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value={"Sesame"}>
                                <SesameIcon/>
                            </Fab>
                            <Fab style={{margin: '10px'}}color="primary" aria-label="add" value={"Halal"}>
                                <HalalIcon/>
                            </Fab>
                            <br/>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value={"Milk"}>
                                <MilkIcon/>
                            </Fab>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value={"Pork"}>
                                <PorkIcon/>
                            </Fab>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value={"Soy"}>
                                <SoyIcon/>
                            </Fab>
                            <br/>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value={"TreeNut"}>
                                <TreeNutIcon/>
                            </Fab>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value={"Alcohol"}>
                                <AlcoholIcon/>
                            </Fab>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value = {"Gluten"}>
                                <GlutenIcon/>
                            </Fab>
                            <br/>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value = {"Shellfish"}>
                                <ShellfishIcon/>
                            </Fab>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value={"Vegan"}>
                                <VeganIcon/>
                            </Fab>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value = {"Vegetarian"}>
                                <VegetarianIcon/>
                            </Fab>
                            <br/>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value = {"Fish"}>
                                <Fish/>
                            </Fab>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value = {"Beef"}>
                                <BeefIcon/>
                            </Fab>
                            <Fab style={{margin: '10px'}} color="primary" aria-label="add" value={"Egg"}>
                                <EggIcon/>
                            </Fab>
                    </Grid>
                    <Grid item>                
                            <Typography className=' pt-3'>
                                Select Breakfast Dining Hall:
                            </Typography>
                            <FormGroup>
                                <RadioGroup name="radio-buttons-group" value={dhB} onChange = {(e) => setDHB(e.target.value)}>
                                    <FormControlLabel value={"Crown/Merill Breakfast"} control={<Radio sx={{color: "white"}}/>} label="Crown/Merill"/>
                                    <FormControlLabel value ={"Nine/Ten Breakfast"} control={<Radio sx={{color: "white"}}/>} label="Nine/Ten" />
                                    <FormControlLabel value={"Porter/Kresge Breakfast"} control={<Radio sx={{color: "white"}}/>} label="Porter/Kresge" />
                                    <FormControlLabel value={"Oaks/RCC Breakfast"} control={<Radio sx={{color: "white"}}/>} label="Oaks/RCC" />
                                    <FormControlLabel value={"Cowell/Stevenson Breakfast"} control={<Radio sx={{color: "white"}}/>} label="Cowell/Stevenson" />
                                </RadioGroup>
                            </FormGroup>
                            <Typography className=' pt-4'>
                                Select Lunch Dining Hall:
                            </Typography>
                            <FormGroup>
                                <RadioGroup name="radio-buttons-group" value={dhL} onChange = {(e) => setDHL(e.target.value)}>
                                    <FormControlLabel value={"Crown/Merill Lunch"} control={<Radio sx={{color: "white"}}/>} label="Crown/Merill"/>
                                    <FormControlLabel value ={"Nine/Ten Lunch"} control={<Radio sx={{color: "white"}}/>} label="Nine/Ten" />
                                    <FormControlLabel value={"Porter/Kresge Lunch"} control={<Radio sx={{color: "white"}}/>} label="Porter/Kresge" />
                                    <FormControlLabel value={"Oaks/RCC Lunch"} control={<Radio sx={{color: "white"}}/>} label="Oaks/RCC" />
                                    <FormControlLabel value={"Cowell/Stevenson Lunch"} control={<Radio sx={{color: "white"}}/>} label="Cowell/Stevenson" />
                                </RadioGroup>
                            </FormGroup>
                            <Typography className=' pt-4'>
                                Select Dinner Dining Hall:
                            </Typography>
                            <FormGroup>
                                <RadioGroup name="radio-buttons-group" value={dhD} onChange = {(e) => setDHD(e.target.value)}>
                                    <FormControlLabel value={"Crown/Merill Dinner"} control={<Radio sx={{color: "white"}}/>} label="Crown/Merill"/>
                                    <FormControlLabel value ={"Nine/Ten Dinner"} control={<Radio sx={{color: "white"}}/>} label="Nine/Ten" />
                                    <FormControlLabel value={"Porter/Kresge Dinner"} control={<Radio sx={{color: "white"}}/>} label="Porter/Kresge" />
                                    <FormControlLabel value={"Oaks/RCC Dinner"} control={<Radio sx={{color: "white"}}/>} label="Oaks/RCC" />
                                    <FormControlLabel value={"Cowell/Stevenson Dinner"} control={<Radio sx={{color: "white"}}/>} label="Cowell/Stevenson" />
                                </RadioGroup>
                            </FormGroup>

                    </Grid>
                    <Grid item xs={10}>
                            <div className="pl-[3rem] pb-7">
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