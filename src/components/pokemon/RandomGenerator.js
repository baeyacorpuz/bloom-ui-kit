import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

const RandomPokemon = () => {
    return (  
        <>
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item md={12}>
                        <Typography varint="h3" color="primary">Generate your Pokemon</Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
 
export default RandomPokemon;