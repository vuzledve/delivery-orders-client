import React from 'react';
import Grid from "@mui/material/Grid";


const Center = (props) => {
    return (
        <Grid
            container
            direction="column"
            alignItems = "center"
            justifyContent="center"
            sx={{minHeight:'60vh'}}>
            <Grid item xs={1}>
                {props.children}
            </Grid>
        </Grid>
    );
};

export default Center;