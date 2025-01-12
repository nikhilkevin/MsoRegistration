import Box from '@mui/material/Box';
import React from 'react'
import Typography from '@mui/material/Typography';
import { useMediaQuery } from 'react-responsive';
import Grid from '@mui/material/Grid';   
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate  } from 'react-router-dom';
import {ConfirmationRoute} from '../Scripts/RoutesData';
const submissionRoute = ({NavigateToNext}) => { 
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const handleme= () =>{
        NavigateToNext.NavigateToNext(ConfirmationRoute.RouteNumber)
        navigate(ConfirmationRoute.RouteName); 
    }
    return (

        <div>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: isMobile ? '28ch' : '35ch' },
                    display: 'flex-box'
                }}
                noValidate
                autoComplete="off"
            > 
                <Grid container
                    spacing={1}
                    columns={12}>
                    <Grid columns={12} container>
                        <Typography sx={{ m: 1 }} variant="h5">Submission Route(s) </Typography>
                    </Grid> 
                </Grid>
                <LoadingButton onClick={handleme}>SUBMIT</LoadingButton> 
            </Box>
        </div>
    )
}
export default submissionRoute
