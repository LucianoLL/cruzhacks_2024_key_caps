import {BrowserRouter as Router, Routes, Route, BrowserRouter, useParams, useNavigate} from 'react-router-dom';
import React, {useEffect, useState, componentDidMount, Component, useMemo} from 'react';
import App from '../App'
import Navbar from '../Components/Navbar';
import { Grid, Paper, TextField, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';




export default function HomePage() {
    
    return(
        <>
            <form>
                <Grid container className="pt-[10rem] pl-[20rem]" spacing={5} columnSpacing={10}>
                    <Grid item>
                        <Paper>
                            <Typography>
                                Calories:
                            </Typography>
                            <TextField id="outlined-basic"/>
                            <Typography>
                                Dietary Restrictions:
                            </Typography>
                            <TextField id="outlined-basic"/>
                        </Paper>
                    </Grid>
                </Grid>
            </form>

        </>
    );
}